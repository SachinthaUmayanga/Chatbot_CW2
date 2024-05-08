import random
import numpy as np
import pickle
import json
from flask import Flask, render_template, request
from chat import get_response, bot_name

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods = ["POST"])
def chatbot_response():
    msg = request.form["msg"]
    print(msg)
    return get_response(msg)

if __name__ == "__main__":
    app.run()