import http from './httpService';

export function getComments() {
    return http.get("http://localhost:5000/api/comments")
}