import Api from "@/services/Api";

export default {
  fetchVideos() {
    return Api().get("videos");
  }
};
