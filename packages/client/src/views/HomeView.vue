<template>
  <main>
    <!-- <TheWelcome /> -->
    <TButton msg="hello"></TButton>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { TButton } from "@tang/components";
import { userApi } from "@tang/apis";
import { arrayUtil } from "@tang/utils";
import { onMounted } from "vue";

onMounted(() => {
  // 测试apis
  userApi.getUser(20).then((res) => {
    console.log(res);
  });
  userApi.getUserByid("tang").then((res) => console.log(res));

  // 测试utils
  const names = ["tang", "liu"];
  console.log("找到的Index:", arrayUtil.findIndex("tang", names));
});
</script>
