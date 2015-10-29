from flask import render_template
from app import app

@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")
    
@app.route("/music")
def music():
    return render_template("music.html")

@app.route("/calendar")
def calendar():
    return render_template("calendar.html")

@app.route("/bio")
def bio():
    return render_template("bio.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")