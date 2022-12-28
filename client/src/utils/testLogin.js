import axios from "axios";

var data = JSON.stringify({
  "userId": "jiwoong",
  "password": "jiwoong1234"
});

var config = {
  method: 'post',
  url: 'http://localhost:8080/user/signin',
  headers: { 
    'ohwunwan_csrf_token': '$2b$04$jqJ/hLh8cQe9mqWWgSwFE.sMn.ppd3t08Q95nx8BF2AqWwAVH6vt.', 
    'Content-Type': 'application/json', 
  },
  withCredentials: true,
  data : data,
};

export const testLogin = () => {
  return axios (config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
} 