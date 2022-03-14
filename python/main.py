import os
import cv2
import datetime
import socket
import tkinter as tk
import tkinter.messagebox
root = tk.Tk()
root.withdraw()

# ファイルを作成する
# for文で回数ぶん回すのも面白いかもしれない
def folder():
    path = './img'
    os.mkdir(path)

#内蔵カメラで写真撮影される
def photo():
    fileName = "photo_" + datetime.datetime.today().strftime('%Y%m%d_%H%M%S') + ".png"
    # 内蔵カメラのデバイスIDは0、USBで接続したカメラは1以降。
    capture = cv2.VideoCapture(0)
    # 取得した画像データは変数imageに格納。retは取得成功変数。
    ret, image = capture.read()
    if ret == True:

        # 取得した画像を出力。fileNameは出力する画像名。
        cv2.imwrite(fileName, image)
        print("taking picture is completed!!")

#IPアドレスを表示させる
def ip():
    print(socket.gethostbyname(socket.gethostname()))

# メッセージボックスの表示
# ここで色々と嫌がらせメッセージを記述する
def show():
    tkinter.messagebox.showinfo('info')

#ファイルを削除する
os.remove(file)

print("hoge")
if __name__ == "__main__":
    show()
