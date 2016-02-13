from flask import render_template, make_response
from app import app

@app.route("/")
@app.route("/index")
@app.route("/music")
@app.route("/calendar")
@app.route("/bio")
@app.route("/contact")
def index():
    return make_response(open("app/templates/base.html").read())