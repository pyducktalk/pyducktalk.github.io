<template>
    <!-- <a @click="replay()"> 没看够再看一遍</a> -->

    <div class="chat-box" ref="chatBox">
        <transition-group name="chat-bubble" tag="div">

            <div v-for="(message, index) in messages" :key="index" :class="[message.type === 'master' ? 'master' : 'user']">
                <div class="message" :style="{ backgroundColor: message.type === 'master' ? colorInfo[0] : colorInfo[1] }">
                    {{ message.content }}
                </div>
            </div>
        </transition-group>

    </div>
</template>
  
<script>

import talkData from "../data/data.json";

const msgInfo = Object.values(talkData)
// console.log(msgInfo)

const colorInfo = ["#70a1ff", "#00d2d3"]

let talkObj = [];
let typeArray = [];
for (let key in talkData) {
    let talkArr = talkData[key].talk;
    for (let i = 0; i < talkArr.length; i++) {
        talkObj.push(talkArr[i]);
        typeArray.push(talkArr[i].type);
    }
}

typeArray = [...new Set(typeArray)]

// console.log(talkObj, typeArray)

export default {
    data() {
        return {
            colorInfo: colorInfo,
            messages: talkObj
        }
    },
    methods: {
        replay() {
            // 逐一显示聊天气泡
            const chatBubbles = document.querySelectorAll('.chat-box .message');
            chatBubbles.forEach((bubble, index) => {
                bubble.style.opacity = 0;
                bubble.style.transform = "translateY(20px)";

                setTimeout(() => {
                    bubble.style.opacity = 1;
                    bubble.style.transform = "translateY(0)";
                }, 400 * index);
            });
        },
    },
    mounted() {
        // 自动滚动到底部
        // this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
        this.replay();
    }


}
</script>
  
<style scoped>
.chat-box {
    /* height: 400px; */
    overflow-y: auto;
    padding: 10px;
}

.message {
    max-width: 70%;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    word-wrap: break-word;
}

.chat-bubble-enter-active,
.chat-bubble-leave-active {
    transition: all 0.5s;
}

.chat-bubble-enter,
.chat-bubble-leave-to {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s;
}


.user {
    display: flex;
    justify-content: flex-start;
}

.master {
    display: flex;
    justify-content: flex-end;
}
</style>