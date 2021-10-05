import React from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import {useSocket} from '../contexts/socket';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {selectAuth} from '../redux/slices/authSlice';
import {
  setCurrentTrack,
  setIsOnRepeat,
  setIsPaused,
  setQueuedTracks,
} from '../redux/slices/playbackSlice';

const usePlaybackControls = () => {
  const dispatch = useAppDispatch();
  const {socket, setSocket} = useSocket();
  const {discordAccessToken} = useAppSelector(selectAuth);

  const connect = async () => {
    if (!discordAccessToken || socket) return;
    const result = await axios.post(`${process.env.REACT_APP_SERVER}/connect`, {
      discordAccessToken,
    });

    const newSocket = socketIOClient(
      process.env.REACT_APP_SOCKET_SERVER as string,
      {
        query: {guildId: result.data},
      },
    );

    newSocket.on('currentTrack', (track?: ProcessedTrack) => {
      dispatch(setCurrentTrack(track));
    });

    newSocket.on('queuedTracks', (tracks: ProcessedTrack[]) => {
      dispatch(setQueuedTracks(tracks));
    });

    newSocket.on('isPaused', (isPaused: boolean) => {
      dispatch(setIsPaused(isPaused));
    });

    newSocket.on('isOnRepeat', (isOnRepeat: boolean) => {
      dispatch(setIsOnRepeat(isOnRepeat));
    });

    setSocket(newSocket);
  };

  const playTracks = (tracks: SpotifyApi.TrackObjectSimplified[]) => {
    if (!socket) return;
    socket.emit('playTracks', tracks);
  };

  const queueTracks = (tracks: SpotifyApi.TrackObjectSimplified[]) => {
    if (!socket) return;
    socket.emit('queueTracks', tracks);
  };

  const togglePause = () => {
    if (!socket) return;
    socket.emit('togglePause');
  };

  const nextTrack = () => {
    if (!socket) return;
    socket.emit('nextTrack');
  };

  const previousTrack = () => {
    if (!socket) return;
    socket.emit('previousTrack');
  };

  const skipTo = (index: number) => {
    if (!socket) return;
    socket.emit('skipTo', index);
  };

  const clearQueue = () => {
    if (!socket) return;
    socket.emit('clearQueue');
  };

  const remove = (index: number) => {
    if (!socket) return;
    socket.emit('remove', index);
  };

  const toggleRepeat = () => {
    if (!socket) return;
    socket.emit('toggleRepeat');
  };

  const shuffle = () => {
    if (!socket) return;
    socket.emit('shuffle');
  };

  return {
    connect,
    playTracks,
    queueTracks,
    togglePause,
    nextTrack,
    previousTrack,
    skipTo,
    clearQueue,
    remove,
    toggleRepeat,
    shuffle,
  };
};

export default usePlaybackControls;
