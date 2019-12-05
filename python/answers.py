import requests

url = "https://brainly.com/question/4151984"
data = requests.get(url)
data.raise_for_status()
index = data.text.find("data-test=\"answer-content\">")
txt = data.text[index:index+2000]
start = txt.find("<span>")
end = txt.find("</span>")
print(txt[start+6:end])
