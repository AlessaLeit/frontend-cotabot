import api from "./api";


export const getQuoteRegistered = async (origin, target, signal) => {
  try {
    const response = await api.get(
        `/coin/conversion/${origin}/${target}`, 
        { signal }
    );

    return response.data
  } catch (error) {
    throw error
  }
};


export const getQuoteRealTime = async (origin, target, signal) => {
  try {
    const response = await api.get(
        `/coin/realtime/${origin}/${target}`, 
        { signal }
    );

    return response.data
  } catch (error) {
    throw error
  }
};


export const getQuoteOnPeriod = async (origin, target, days, interval, signal) => {
  try {
    const response = await api.get(
        `/coin/period/${origin}/${target}/${days}/${interval}`, 
        { signal }
    );

    return response.data
  } catch (error) {
    throw error
  }
};