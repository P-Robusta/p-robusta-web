import axios from 'axios';
const CallAPI = async (endpoint) => {
  // ----------------Set URL----------------
  // const api_url = process.env.REACT_APP_API_URL
  const api_url = 'http://localhost:8000/api/client';

  let inforToken = JSON.parse(localStorage.getItem('__client_token_pnv__'));
  let expirationDate = Number(localStorage.getItem('__day_get_token_pnv__'));
  // ----------------Get token function----------------
  const getToken = async () => {
    //set base infor
    // const getTokenUrl = process.env.REACT_APP_API_URL_GET_TOKEN
    const getTokenUrl = 'http://localhost:8000/oauth/token';

    let client_oauth = new URLSearchParams();
    client_oauth.append('client_id', process.env.REACT_APP_CLIENT_ID);
    client_oauth.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
    client_oauth.append('grant_type', process.env.REACT_APP_GRANT_TYPE);

    const configs = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json, text/plain, */*',
      },
    };
    //call oauth to get access_token
    await axios
      .post(getTokenUrl, client_oauth, configs)
      .then((res) => {
        localStorage.setItem('__client_token_pnv__', JSON.stringify(res.data));
        localStorage.setItem('__day_get_token_pnv__', new Date().getTime());
      })
      .catch((err) => console.log(err));
    checkToken();
  };

  //----------------check token, if it have -> pass, else -> get token----------------
  const checkToken = async () => {
    let dateNow = new Date().getTime();

    if (
      inforToken &&
      inforToken.access_token &&
      expirationDate &&
      Math.abs((dateNow - expirationDate) / 1000) < inforToken.expires_in
    ) {
      //continue check connet api
      await axios
        .get(`${api_url}/categories`, {
          headers: {
            Authorization: `${inforToken.token_type} ${inforToken.access_token}`,
            Accept: 'application/json',
          },
        })
        .catch(async (error) => {
          console.error(error);
          if (error.message.indexOf('401') > -1) {
            await getToken();
            window.location.reload();
          }
        });
    } else {
      await getToken();
    }
  };
  await checkToken();
  //----------------call api----------------
  return axios.get(`${api_url}/${endpoint}`, {
    headers: {
      Authorization: `${inforToken.token_type} ${inforToken.access_token}`,
      Accept: 'application/json',
    },
  });
};

export default CallAPI;
