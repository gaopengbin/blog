# from flask_cors import CORS
from flask import Flask, request
# import pymysql
import json

app = Flask(__name__)


@app.route("/index", methods=['GET', 'POST'])
def index():
    res = {'a': 1}
    return json.dumps(res)


@app.route("/uploadImg", methods=['POST'])
def upload_img():
    f = request.files['img']
    f.save('E:/ZMyProject/laogaoBlog/.vuepress/dist/'+f.filename)
    print(f.filename)
    return f.filename

@app.route("/uploadFile", methods=['POST'])
def upload_file():
    f = request.files['file']
    f.save('E:/ZMyProject/laogaoBlog/.vuepress/dist/blogs/xuexi'+f.filename)
    print(f.filename)
    return f.filename


app.run()
