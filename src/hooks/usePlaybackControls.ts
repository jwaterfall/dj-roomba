import axios from 'axios';
import React from 'react';
import socketIOClient from 'socket.io-client';

import { useSocket } from '../contexts/socket';
import { selectAuth } from '../redux/slices/authSlice';
import {
  setCurrentTrack,
  setIsOnRepeat,
  setIsPaused,
  setQueuedTracks,
} from '../redux/slices/playbackSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const usePlaybackControls = () => {
  const dispatch = useAppDispatch();
  const { socket, setSocket } = useSocket();
  const { discordAccessToken } = useAppSelector(selectAuth);

  const connect = async () => {
    if (!discordAccessToken || socket) return;
    const result = await axios.post(`${process.env.REACT_APP_SERVER}/connect`, {
      discordAccessToken,
    });

    const { guildId, username } = result.data;

    const newSocket = socketIOClient(process.env.REACT_APP_SERVER as string, {
      query: { guildId, username },
    });

    newSocket.on('currentTrack', (track?: QueuedTrack) => {
      dispatch(setCurrentTrack(track));
    });

    newSocket.on('queuedTracks', (tracks: QueuedTrack[]) => {
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

  const play = async (query: string, queue = false) => {
    if (!socket) return;
    socket.emit('play', query, queue);
  };

  const playYoutubeVideo = async (videoId: string, queue = false) => {
    if (!socket) return;
    play(`https://www.youtube.com/watch?v=${videoId}`, queue);
  };

  const playTrack = async (trackId: string, queue = false) => {
    if (!socket) return;
    play(`https://open.spotify.com/track/${trackId}`, queue);
  };

  const playAlbum = async (albumId: string, queue = false) => {
    if (!socket) return;
    play(`https://open.spotify.com/album/${albumId}`, queue);
  };

  const playPlaylist = async (playlistId: string, queue = false) => {
    if (!socket) return;
    play(`https://open.spotify.com/playlist/${playlistId}`, queue);
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
    play,
    playYoutubeVideo,
    playTrack,
    playAlbum,
    playPlaylist,
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
