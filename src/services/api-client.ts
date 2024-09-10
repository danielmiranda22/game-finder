import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '17a82b2a6d58436aa57351df6a14955d', //this is not secure and not recomended!!!!!
  },
});
