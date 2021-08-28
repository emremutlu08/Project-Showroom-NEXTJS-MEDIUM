import axios from "axios";

const api = axios.create({
  baseURL: "https://www.udemy.com/api-2.0/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json, text/plain, */*",
    // Authorization: `Basic {BASE64_ENCODED(${process.env.udemy_clientid}:${process.env.udemy_secret})}`,
    Authorization:
      "Basic U2tjc1F4MDRXUGJTSnBDMHBEYTZzSExDck9iYW1yVW1ielNRQm4zQTpBaU9DYXFqTmxGTlhjSHRsQ1UyMFQzUmVWU3ZFMDdhcE1zOTRHcTlLS2xVUHpSRU5OUnFjOHBGT0twZ1V5aFpuRm1VWHJpdGZ1a0ptSWNwV2ZwOHJXeEdKWmViQnYzQXVodUx0VW1ndE9kZEhoTU9TY3dLakF2U3Zpa1VHZ0ZrMw==",
  },
});

export default api;
