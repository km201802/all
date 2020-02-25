import requests as requests

url = 'https://brainly.com/question/2454942'
url = input('link:  ')
ide = 'upvoteCount'
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
data = requests.get(url, headers=headers)
text1 = data.text
f1 = text1.find(ide)
text2 = text1[f1:f1+1000]
f2 = text2.find('text')+7
text3 = text2[f2:-1]
end = text3.find('\"')
print("Answer:  "+text3[0:end])
