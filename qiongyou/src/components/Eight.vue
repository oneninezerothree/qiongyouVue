<template>
  <div class="box">
    <div class="bookBar">
      <div class="consultCollection">
        <span data-bn-ipg="contact-supplier-click">
          <i class="zwui-iconfont zworld-icon-consult bookBarIcon"></i>咨询
        </span>
        <span data-bn-ipg="favor-click">
          <i class="bookBarIcon iconfav icon-like"></i>收藏
        </span>
      </div>
      <div data-bn-ipg="book-click" class="book booktype">
        <a href="#this">立即预订</a>
      </div>
    </div>
    <div data-bn-ipg="details-backtothetop-click" class="topButton" @click="hh" :class="isok=1?'topButton':''">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   data(){
        return{
            isok:1
        }
    },
    methods:{
     hh(){
        window.scrollTo(0,0);
        this.isok=1;
      },
  }
})
</script>

<style lang="scss" scoped>
.bookBar,
.bookBar .consultCollection {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.bookBar {
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: -1px;
  z-index: 12;
  cursor: pointer;
}
.bookBar .consultCollection {
  width: 70%;
  background: #737373;
  color: #fff;
}

.bookBar,
.bookBar .consultCollection {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.bookBar .book,
.bookBar .jump {
  width: 30%;
  background: #ff7467;
  font-size: 20px;
  text-align: center;
  line-height: 45px;
  font-weight: 700;
}
.bookBar .consultCollection span {
  font-size: 17px;
  margin-left: 15px;
  line-height: 45px;
}
.bookBar .consultCollection span .bookBarIcon {
  margin-right: 5px;
  display: inline-block;
  width: 24px;
  height: 22.8px;
  position: relative;
  top: 2px;
  background: url(../assets/ej.png) no-repeat center center;
}

.zwui-iconfont {
  font-family: zworld !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bookBar .consultCollection span .icon-like {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7mlLbol4/mnKrpgInkuK08L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMjkuMTEzMDkyNCwyMC4wMTMxNzI3IEMyNy45NzYzMzkzLDIxLjYzMzU3MDIgMjYuNzI1ODg2LDIzLjE3MDYyMjMgMjUuMzcxMjM5LDI0LjYxMjY0MzQgQzI0LjA1MzY1NjcsMjYuMDIyNDI4NyAyMi42ODM0MTI5LDI3LjM5Njk4NzIgMjEuMjk1NTk2OSwyOC42NjU3ODMgQzIwLjQ1MjMyNTYsMjkuNDIzNTU3IDE5LjgwMjM0OCwzMC4wMDUxMTQ4IDE5LjM5ODI5ODIsMzAuMzIyMzIwNyBDMTguMDEwMzYwMSwzMS40NjgzMTc0IDE2LjAwNzg3MjgsMzEuNDY4MzE3NCAxNC42MTk5MzQ3LDMwLjMyMjMyMDcgQzE0LjIzMzQ1NzEsMjkuOTg3NDg3NyAxMy41NjU4Nzk5LDI5LjQyMzU1NyAxMi43MjI2MzYsMjguNjQ4MTgzNCBDMTEuMzM0ODIsMjcuMzc5MzYwMSA5Ljk0Njk3NjYsMjYuMDIyNDI4NyA4LjYyOTQyMTc5LDI0LjU5NTAxNjIgQzcuMjc3NTY3NzUsMjMuMTYyOTg5MyA2LjAyNzIyMjg2LDIxLjYzNzg2MiA0Ljg4NzU0MDksMjAuMDMwNzk5OCBDMy4xODcxOTQ5LDE3Ljg2Nzc2NDggMi4xODI0MzA5NSwxNS4yMzczNzEgMi4wMDY0NzYwMiwxMi40ODgzOTYxIEMxLjkxMDE0NDU4LDkuOTI5MDg5MjUgMi44OTIxMTQwNyw3LjQ0NzMwMDM2IDQuNzExODc0MjUsNS42NTA4ODUwOCBDOC4wNzEyODgsMi4zNTI2ODAyNSAxMy4zNjM2OTc4LDIuMTA5OTc4NzggMTcuMDA5MDg5LDUuMDg2OTU0NDMgQzIwLjY1MTc5NSwyLjEwMTc5ODU3IDI1Ljk1MDMzNDgsMi4zNDQ3ODA2MSAyOS4zMDYzMzEyLDUuNjUwODg1MDggQzMxLjExMDQ2MDgsNy40NDE5MzAyIDMyLjA4NTEyNjEsOS45MDg1NzkzMiAzMS45OTQxNTczLDEyLjQ1MzE0MTkgQzMxLjgyMzkxODIsMTUuMjA4NzEzOCAzMC44MTg3MjA5LDE3Ljg0NjM5MiAyOS4xMTMwOTI0LDIwLjAxMzE3MjcgWiIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+);
}

.bookBar .consultCollection span .iconfav {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-position: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  top: 1px;
}
.bookBar .book a,
.bookBar .jump a {
  color: #fff;
}
a {
  text-decoration: none;
}
// ----------------------------------
.topButton {
    position: fixed;
    right: 15px;
    bottom: 150px;
    width: 41px;
    height: 41px;
    border-radius: 41px;
    background-color: rgba(0,0,0,.4);
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMzggMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuS6p+WTgeivpuaDhemhtSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY1OS4wMDAwMDAsIC05NDkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSLlm57pobbpg6giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYzNy4wMDAwMDAsIDkyNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC41MDU3NDc2LDI0LjE5MTQyMjQgQzMzLjg5NzgyNjksMjQuNzk3MzY3IDMyLjkxNTA2ODIsMjQuNzk3MzY3IDMyLjMwOTEyMjgsMjQuMTkxNDIyNCBMMjAuOTQ0MTg5MSwxMi44MTc0NDE3IEwyMC45NDQxODkxLDM3LjA3NTA5NCBDMjAuOTQ0MTg5MSwzNy45MzMyOTI4IDIwLjI0OTI0MDEsMzguNjI5Mjg2NyAxOS4zOTEwNCwzOC42MjkyODY3IEMxOC41MzM4ODU4LDM4LjYyOTI4NjcgMTcuODM3ODkwOSwzNy45MzMyOTI4IDE3LjgzNzg5MDksMzcuMDc1MDk0IEwxNy44Mzc4OTEsMTIuODE3NDQxNyBMNi40NzM4ODcwMSwyNC4xOTE0MjI0IEM1Ljg2NzAxMjA2LDI0Ljc5NzM2NyA0Ljg4NDI1MzM3LDI0Ljc5NzM2NyA0LjI3NzM3ODQzLDI0LjE5MTQyMjQgQzMuNjcwNTAzNDksMjMuNTgzNjE4NyAzLjY3MDUwMzQ5LDIyLjU5ODY1MzggNC4yNzczNzg0MywyMS45OTI4MjU0IEwxOC4yOTI3ODU5LDcuOTY2MjgzMTIgQzE4LjMxMTAyODEsNy45NDgwNDA4OSAxOC4zMjkxNTQyLDcuOTI5Nzk4NjUgMTguMzc1ODYzNyw3Ljg4OTI0NzQxIEMxOC4zODU5NzI1LDcuODgwMDY4MjEgMTguMzk2MTk3NSw3Ljg3MTAwNTE3IDE4LjQ2NTA5OTgsNy44MTYyNzg0NyBDMTguNDc5Mjc1Miw3LjgwNjE2OTY3IDE4LjQ5MjQwNTEsNy43OTgwMzYyMyAxOC41NjkzMjQ3LDcuNzQ1NDAwOTMgQzE4LjU3NjUyODcsNy43NDEzMzQxNiAxOC41ODM2MTY1LDcuNzM3MjY3NSAxOC42Njg2Njk2LDcuNjg4Njk4OTggQzE4LjY3ODc3ODQsNy42ODI2NTY5NSAxOC42ODc4NDE1LDcuNjc4NTkwMTggMTguNzYyOTAxOSw3LjY0MzE1MTQ3IEMxOC43NzQ5ODYsNy42MzgwMzkwNSAxOC43ODUwOTQ3LDcuNjMzMDQyNjcgMTguODY4Mjg4OCw3LjYwMDUwODgyIEMxOC44NzgzOTc2LDcuNTk3NDg3OCAxOC44ODg1MDYzLDcuNTkzNDIxMDMgMTguOTY4NDQ3LDcuNTY5MTM2NzcgQzE4Ljk4MzY2ODMsNy41NjUwNjk5OSAxOC45OTk5MzUzLDcuNTYxMDAzMzMgMTkuMDg5MDU1Miw3LjUzOTc0MDA4IEMxOS4wOTgyMzQ0LDcuNTM4Njk0MzIgMTkuMTA2MjUxNyw3LjUzNjcxOTA3IDE5LjE5MjQ2NjgsNy41MjM0NzMxIEMxOS4yMDg3MzM4LDcuNTIxNDk3ODUgMTkuMjIyOTA5Myw3LjUxOTQwNjMzIDE5LjMxNDAwNDQsNy41MTIzMTg2NSBDMTkuMzQwNDk2NCw3LjUxMTI3Mjg5IDE5LjM2NTcxMDIsNy41MTAyMjcxMyAxOS40NjgwNzYxLDcuNTEyMzE4NjUgQzE5LjQ4MDE2MDIsNy41MTIzMTg2NSAxOS40OTIzNjA0LDcuNTE0NDEwMTggMTkuNTg5NjEzNyw3LjUyMzQ3MzEgQzE5LjU5ODY3NjgsNy41MjQ1MTg4NiAxOS42MDc4NTYsNy41MjU1NjQ2MiAxOS42OTMwMjU0LDcuNTM5NzQwMDggQzE5LjcwOTI5MjQsNy41NDI3NjExIDE5LjcyNTQ0MzEsNy41NDY4Mjc4NyAxOS44MTM2MzM1LDcuNTY5MTM2NzcgQzE5LjgyMjY5NjYsNy41NzEyMjgyOSAxOS44MzA3MTM4LDcuNTc0MTMzMDMgMTkuOTEzNzkxNyw3LjYwMDUwODgyIEMxOS45MjU5OTE5LDcuNjA1NjIxMjQgMTkuOTM5MjM3OSw3LjYwOTY4ODAxIDIwLjAxOTE3ODYsNy42NDMxNTE0NyBDMjAuMDMxMjYyNyw3LjY0ODE0NzczIDIwLjA0MzQ2MjksNy42NTQzMDU5MiAyMC4xMjQ1NjU1LDcuNjk0NzQxIEMyMC4xMzI1ODI4LDcuNjk4ODA3NzggMjAuMTQwODMyNSw3LjcwMjg3NDQ0IDIwLjIxMjc1NTgsNy43NDU0MDEwNSBDMjAuMjI2ODE1MSw3Ljc1NTUwOTg1IDIwLjI0MTEwNjksNy43NjM2NDMyOCAyMC4zMTY5ODA4LDcuODE2Mjc4NTggQzIwLjMyNTExNDIsNy44MjI0MzY3NiAyMC4zMzIyMDIsNy44Mjg0Nzg3OSAyMC40MDYyMTY4LDcuODg5MjQ3NTIgQzIwLjQxNDIzNDEsNy44OTYzMzUzMSAyMC40MjQ0NTkxLDcuOTA0NDY4NzQgMjAuNDg5Mjk0Nyw3Ljk2NjI4MzI0IEwzNC41MDQ3MDIxLDIxLjk5MjgyNTYgQzM1LjExMTU3NjksMjIuNTk4NjUzOCAzNS4xMTE1NzY5LDIzLjU4MzUwMjUgMzQuNTA1NzQ3NiwyNC4xOTE0MjI0IFoiIGlkPSLot6/lvoQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM1LjkzMDEyNjIsMy4yNDE3MTg3MyBMMS42ODY1OTg2LDMuMjQxNzE4NzMgQzAuODI4Mzk4NTYzLDMuMjQxNzE4NzMgMC4xMzMzMzMzMzMsMi41NDY2NTQzNiAwLjEzMzMzMzMzMywxLjY4NzUyNjAzIEMwLjEzMzMzMzMzMywwLjgyOTQ0MzQ2NCAwLjgyODM5ODY3NiwwLjEzMzMzMzMzMyAxLjY4NjU5ODYsMC4xMzMzMzMzMzMgTDM1LjkzMDEyNjIsMC4xMzMzMzMzMzMgQzM2Ljc4ODMyNjIsMC4xMzMzMzMzMzMgMzcuNDgzMzkxNCwwLjgyOTQ0MzM1MSAzNy40ODMzOTE0LDEuNjg3NTI2MDMgQzM3LjQ4MzM5MTQsMi41NDY2NTQzNiAzNi43ODgzMjYxLDMuMjQxNzE4NzMgMzUuOTMwMTI2MiwzLjI0MTcxODczIFoiIGlkPSLot6/lvoQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 18px;
}
</style>
