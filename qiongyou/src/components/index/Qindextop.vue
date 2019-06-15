<template>
  <div>
    <header class="m-header">
      <div class="logo">
        <img src="../../../public/img/logo/logo.svg">
      </div>
      <div data-bn-ipg="index-search" class="search-box" @click="go">
        <i class="search-icon"></i>
        <span>搜索目的地、游记攻略等</span>
      </div>
      <div data-bn-ipg="index-user" class="user-info">
        <a href="javascript:void(0)">
          <img src="../../assets/touxian.jpg" onerror class="avatar">
          <i class="q-notice"></i>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods:{
    go(){
      this.$router.push('/Seek');
    }
  }
};
</script>


<style lang="scss" scoped>
.m-header {
  padding: 7px 15px;
  width: 100%;
  height: 44px;

  box-sizing: border-box;
  line-height: 30px;
  background-color: #fff;
  position: relative;
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  display: flex;
  //   -webkit-box-pack: justify;
  //   -ms-flex-pack: justify;
  //   justify-content: space-between;
  font-size: 0;
}
.m-header .logo {
  width: 63px;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 63px;
  flex: 0 1 63px;
  height: 30px;
}
.m-header .logo img {
  display: inline-block;
  height: 20px;
  line-height: 30px;
  vertical-align: middle;
}
.m-header .search-box {
  -ms-flex-item-align: center;
  align-self: center;
  height: 30px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 15px;
  background-color: #f0f0f0;
  padding: 0 18px;
}
.m-header .search-box .search-icon {
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  background: no-repeat 50%/100% no-repeat 50%/100%
    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMjcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5pY19zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC44MDAwMDAwMTIiPgogICAgICAgIDxnIGlkPSJINemmlumhtSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwOC4wMDAwMDAsIC0xNTguMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMuNjI1Ij4KICAgICAgICAgICAgPGcgaWQ9ImljX3NlYXJjaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEwLjAwMDAwMCwgMTYwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjguNzYwNDE2NjciIGN5PSI4Ljc2MDQxNjY3IiByPSI4Ljc2MDQxNjY3Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS41LDE1LjUgTDIzLjE2NjY2NjcsMjMuMTY2NjY2NyIgaWQ9IlBhdGgtMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
}
.m-header .search-box span {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 11px;
  line-height: 30px;
}
.m-header .user-info {
  -ms-flex-item-align: end;
  align-self: flex-end;
  width: 28px;
  height: 28px;
  line-height: 30px;
  vertical-align: middle;
  position: relative;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 28px;
  flex: 0 1 28px;
}
.m-header .user-info a {
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
}
.m-header .user-info img {
  width: 100%;
  height: 100%;
}
.m-header .user-info .q-notice {
  position: absolute;
  z-index: 50;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUJGMUVDNkY3NjJFMTFFNUIwQzlGQUFBRDVGQkNFMjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUJGMUVDNzA3NjJFMTFFNUIwQzlGQUFBRDVGQkNFMjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQkYxRUM2RDc2MkUxMUU1QjBDOUZBQUFENUZCQ0UyMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQkYxRUM2RTc2MkUxMUU1QjBDOUZBQUFENUZCQ0UyMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlXagFAAAAGESURBVHjajJPPSkJBFMa/uRrZA/RHTSWKaClEizJamNkqeoMgoiJoW7QJ2hdBiyBS6RWCNqkhVBa0bBsKYWhk0Dqqe6dzxjtxkdR74Hf5zsycjzOXM5BSookokSZKxCdhEmV7bbz5vDPxERnCkq2D906Jbl0nlAvgI66IGCfWTRaycAH5UQdME6LXDxFfgDEzDzuuiSTxpQ3SxIqsPsNK7UO+1fBfiIFBGGvbEP4QpyfEBhtMkHjgfXNvk4qraBciEIZn94ilSUQN+izxumq7QzGHrFVgFXMsPdw1GyTUxm0WbkMW81om2CCiFus19wb1Vy1DbOBV0jJdG0CIPy82KDd+TsR9fX9AywobqMuL2Jx7g+mkljk2OFOt0JCIYOcuRHgYxtQsyx8ixQaP9lDAWN+BiIy0Lh4ahbG6pdNj4klPYg9xbo8nrLs85H0B8r3xt0WfX13RmIzr4ktikUfZ+Zi6iEPiu81j4r0Dwtv8mJwxRizb3QTttRcib7+ZkvPwrwADAJ/XD2/4Lx4bAAAAAElFTkSuQmCC)
    50% / contain no-repeat;
}
</style>
