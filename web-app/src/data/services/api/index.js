import axios from 'axios';

// Channels

export const fetchChannels = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/channels`
  );
  const channels = response.data;
  return channels;
};

// export const createChannels = async () => {
//   await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/channels`);
// };

// Messages

export const fetchMessages = async id => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/channels/${id}/messages`
  );
  const messages = response.data;
  return messages;
};