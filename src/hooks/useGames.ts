import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //it is an array of objects where wich object has a property called platform of type Platform
  metacritic: number;
}
const useGames = () => useData<Game>('/games');

export default useGames;
