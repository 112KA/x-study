import bpy
import math

def create_closed_3d_lissajous_curve(name="ClosedLissajous3DCurve", A=1.0, B=1.0, C=1.0, a=3, b=2, c=1, delta_xy=math.pi/2, delta_xz=math.pi/3, num_points=500):
    """
    閉じた3Dリサージュ曲線を生成し、BlenderにNURBSカーブオブジェクトとして追加します。

    Args:
        name (str): 生成されるカーブオブジェクトの名前。
        A (float): x方向の振幅。
        B (float): y方向の振幅。
        C (float): z方向の振幅。
        a (int): x方向の周波数。
        b (int): y方向の周波数。
        c (int): z方向の周波数。
        delta_xy (float): xとyの位相差 (ラジアン)。
        delta_xz (float): xとzの位相差 (ラジアン)。
        num_points (int): カーブを構成する点の数。
    """

    # 新しいカーブデータを作成
    curve_data = bpy.data.curves.new(name=name, type='CURVE')
    curve_data.dimensions = '3D' # 3Dカーブとして定義

    # 新しいNURBSスプラインを追加
    # NURBSを使用することで、より滑らかで閉じた曲線を作成しやすくなります
    nurbs_spline = curve_data.splines.new('NURBS')
    
    # 閉じたカーブにするために、必要な点数を計算
    # NURBSの場合、閉じるために始点と終点だけでなく、制御点も適切に配置する必要がありますが
    # use_cyclic_u=True を使うことで自動的に処理されます。
    # ここでは、計算した点をそのままNURBSの制御点として与えます。
    nurbs_spline.points.add(num_points)

    # リサージュ曲線の座標を計算して設定
    # tの範囲を 0 から 2*pi までにすることで、多くの場合曲線が閉じます
    # さらにNURBSのcyclicオプションで確実に閉じます
    for i in range(num_points):
        # 周波数a, b, cの最小公倍数(LCM)を考慮して適切な周期を設定すると、よりきれいに閉じます。
        # 今回は一般的な 2 * math.pi で計算し、NURBSの cyclic オプションで閉じることを優先します。
        t = i / num_points * (2 * math.pi)

        x = A * math.sin(a * t + delta_xy)
        y = B * math.cos(b * t)
        z = C * math.sin(c * t + delta_xz)

        # 点の座標を設定 (W成分は通常1.0)
        nurbs_spline.points[i].co = (x, y, z, 1.0)

    # スプラインを閉じる設定
    nurbs_spline.use_cyclic_u = True

    # カーブデータをオブジェクトとしてシーンに追加
    obj = bpy.data.objects.new(name, curve_data)
    bpy.context.collection.objects.link(obj)

    # 生成されたカーブを選択状態にする
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)

    print(f"'{name}' の閉じた3Dリサージュ曲線が生成されました。")

# --- スクリプトの実行部分 ---
if __name__ == "__main__":
    # 既存のオブジェクトの選択を解除
    bpy.ops.object.select_all(action='DESELECT')

    # 閉じた3Dリサージュ曲線を生成 (例: シンプルな結び目のような曲線)
    # create_closed_3d_lissajous_curve(name="Lissajous3D_Closed_Knot", A=2.0, B=2.0, C=2.0, a=3, b=4, c=5, delta_xy=math.pi/2, delta_xz=math.pi/4, num_points=800)
    create_closed_3d_lissajous_curve(name="Lissajous3D_Closed_Knot", A=25.0, B=25.0, C=25.0, a=2, b=2, c=3, delta_xy=0, delta_xz=0, num_points=80)

    # 別のパラメータで生成することも可能
    # create_closed_3d_lissajous_curve(name="Lissajous3D_Closed_Helix", A=1.5, B=1.5, C=3.0, a=1, b=1, c=2, delta_xy=math.pi/2, delta_xz=0, num_points=600)
    # create_closed_3d_lissajous_curve(name="Lissajous3D_Closed_Complex", A=3.0, B=2.5, C=1.5, a=5, b=7, c=3, delta_xy=0, delta_xz=math.pi/3, num_points=1000)