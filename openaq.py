import requests

url = "https://api.openaq.org/v3/latest"
headers = {
    "accept": "application/json",
    "X-API-Key": "2841bd628d8c593ecc002b5d84c88960d9b3167ebaf8f3e8fa1927f2b65573f0"
}
params = {
    "country": "IN",
    "limit": 1
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
