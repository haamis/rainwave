import { RainwaveResponseTypes } from "./responseTypes";

interface RainwavePagedParams extends Record<string, number | undefined> {
  per_page?: number;
  page_start?: number;
}

interface BaseRequest {
  response: unknown;
  params: Record<string, unknown>;
}

interface AlbumRequest extends BaseRequest {
  response: { album: RainwaveResponseTypes["album"] };
  params: {
    id: number;
    sort?: "added_on";
    allCategories?: false;
  };
}

interface AllAlbumsByCursorRequest extends BaseRequest {
  response: { all_albums: RainwaveResponseTypes["all_albums_by_cursor"] };
}

interface AllArtistsRequest extends BaseRequest {
  response: { all_artists: RainwaveResponseTypes["all_artists"] };
  params: {
    noSearchable?: true;
  };
}

interface AllFavesRequest extends BaseRequest {
  response: { all_faves: RainwaveResponseTypes["all_faves"] };
  params: RainwavePagedParams;
}

interface AllGroupsRequest extends BaseRequest {
  response: { all_groups: RainwaveResponseTypes["all_groups"] };
  params: {
    noSearchable?: true;
    all?: false;
  };
}

interface AllSongsRequest extends BaseRequest {
  response: { all_songs: RainwaveResponseTypes["all_songs"] };
  params: RainwavePagedParams & {
    order?: "rating";
  };
}

interface ArtistRequest extends BaseRequest {
  response: { artist: RainwaveResponseTypes["artist"] };
  params: {
    id: number;
  };
}

interface ClearRatingRequest extends BaseRequest {
  response: { clear_rating: RainwaveResponseTypes["rate_result"] };
  params: {
    songId: number;
  };
}

interface ClearRequestsRequest extends BaseRequest {
  response: { clear_requests: RainwaveResponseTypes["requests"] };
}

interface ClearRequestsOnCooldownRequest extends BaseRequest {
  response: {
    clear_requests_on_cooldown: RainwaveResponseTypes["requests"];
  };
}

interface DeleteRequestRequest extends BaseRequest {
  response: { delete_request: RainwaveResponseTypes["requests"] };
  params: {
    songId: number;
  };
}

interface FaveAlbumRequest extends BaseRequest {
  response: { fave_album: RainwaveResponseTypes["rate_result"] };
  params: {
    albumId: number;
    fave: boolean;
  };
}

interface FaveAllSongsRequest extends BaseRequest {
  response: { fave_all_songs: RainwaveResponseTypes["rate_result"] };
  params: {
    albumId: number;
    fave: boolean;
  };
}

interface FaveSongRequest extends BaseRequest {
  response: { fave_song: RainwaveResponseTypes["rate_result"] };
  params: {
    songId: number;
    fave: boolean;
  };
}

interface GroupRequest extends BaseRequest {
  response: { group: RainwaveResponseTypes["group"] };
  params: {
    id: number;
  };
}

interface InfoAllRequest extends BaseRequest {
  response: { info_all: RainwaveResponseTypes["all_stations_info"] };
}

interface ListenerRequest extends BaseRequest {
  response: { listener: RainwaveResponseTypes["listener"] };
  params: {
    id: number;
  };
}

interface OrderRequestsRequest extends BaseRequest {
  response: { order_requests: RainwaveResponseTypes["requests"] };
  params: {
    order: number[];
  };
}

interface PauseRequestQueueRequest extends BaseRequest {
  response: {
    pause_requests_queue: RainwaveResponseTypes["requests"];
  };
}

interface PlaybackHistoryRequest extends BaseRequest {
  response: { playback_history: RainwaveResponseTypes["playback_history"] };
  params: RainwavePagedParams;
}

interface RateRequest extends BaseRequest {
  response: { rate: RainwaveResponseTypes["rate_result"] };
  params: {
    songId: number;
    rating: 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 4.5 | 5.0;
  };
}

interface RequestRequest extends BaseRequest {
  response: { request: RainwaveResponseTypes["requests"] };
  params: {
    songId: number;
  };
}

interface RequestFavoritedSongsRequest extends BaseRequest {
  response: {
    request_favorited_songs: RainwaveResponseTypes["requests"];
  };
  params: {
    limit?: number;
  };
}

interface RequestLineRequest extends BaseRequest {
  response: { request_line: RainwaveResponseTypes["request_line"] };
}

interface RequestUnratedSongsRequest extends BaseRequest {
  response: {
    request_unrated_songs: RainwaveResponseTypes["requests"];
  };
  params: {
    limit?: number;
  };
}

interface SearchRequest extends BaseRequest {
  response: { search: RainwaveResponseTypes["search_results"] };
  params: {
    search: string;
  };
}

interface SongRequest extends BaseRequest {
  response: { song: RainwaveResponseTypes["song"] };
  id: number;
}

interface StationSongCountRequest extends BaseRequest {
  response: {
    station_song_count: RainwaveResponseTypes["station_song_count"];
  };
}

interface StationsRequest extends BaseRequest {
  response: { stations: RainwaveResponseTypes["stations"] };
}

interface Top100Request extends BaseRequest {
  response: { top_100: RainwaveResponseTypes["top_100"] };
}

interface UnpauseRequestQueueRequest extends BaseRequest {
  response: {
    unpause_request_queue: RainwaveResponseTypes["requests"];
  };
}

interface UnratedSongsRequest extends BaseRequest {
  response: { unrated_songs: RainwaveResponseTypes["unrated_songs"] };
  params: RainwavePagedParams;
}

interface UserInfoRequest extends BaseRequest {
  response: { user_info: RainwaveResponseTypes["user"] };
}

interface UserRecentVotesRequest extends BaseRequest {
  response: { user_recent_votes: RainwaveResponseTypes["user_recent_votes"] };
  params: RainwavePagedParams;
}

interface UserRequestedHistoryRequest extends BaseRequest {
  response: {
    user_requested_history: RainwaveResponseTypes["user_requested_history"];
  };
  params: RainwavePagedParams;
}

interface VoteRequest extends BaseRequest {
  response: { vote: RainwaveResponseTypes["vote_result"] };
  params: {
    entryId: number;
  };
}

interface RainwaveRequests {
  album: AlbumRequest;
  all_albums_by_cursor: AllAlbumsByCursorRequest;
  all_artists: AllArtistsRequest;
  all_faves: AllFavesRequest;
  all_groups: AllGroupsRequest;
  all_songs: AllSongsRequest;
  artist: ArtistRequest;
  clear_rating: ClearRatingRequest;
  clear_requests: ClearRequestsRequest;
  clear_requests_on_cooldown: ClearRequestsOnCooldownRequest;
  delete_request: DeleteRequestRequest;
  fave_album: FaveAlbumRequest;
  fave_all_songs: FaveAllSongsRequest;
  fave_song: FaveSongRequest;
  group_request: GroupRequest;
  info_all: InfoAllRequest;
  listener: ListenerRequest;
  order_requests: OrderRequestsRequest;
  pause_requests: PauseRequestQueueRequest;
  playback_history: PlaybackHistoryRequest;
  rate: RateRequest;
  request: RequestRequest;
  request_favorited: RequestFavoritedSongsRequest;
  request_line: RequestLineRequest;
  request_unrated: RequestUnratedSongsRequest;
  search: SearchRequest;
  song: SongRequest;
  station_song_count: StationSongCountRequest;
  stations: StationsRequest;
  top_100: Top100Request;
  unpause_request_queue: UnpauseRequestQueueRequest;
  unrated_songs: UnratedSongsRequest;
  user_info: UserInfoRequest;
  user_recent_votes: UserRecentVotesRequest;
  user_requested_history: UserRequestedHistoryRequest;
  vote: VoteRequest;
}

export { RainwaveRequests };