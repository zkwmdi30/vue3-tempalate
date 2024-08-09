<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue';
import DocumentationIcon from '@/components/icons/IconDocumentation.vue';
import ToolingIcon from '@/components/icons/IconTooling.vue';
import EcosystemIcon from '@/components/icons/IconEcosystem.vue';
import CommunityIcon from '@/components/icons/IconCommunity.vue';
import SupportIcon from '@/components/icons/IconSupport.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <router-link :to="'editor'">에디터</router-link>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <router-link :to="'dataTable'">데이터 테이블 (그리드)</router-link>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <router-link :to="'chart'">차트</router-link>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>추가예정...</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>
      <router-link :to="'websocket'">웹 소켓 (Alli 테스트)</router-link>
    </template>
  </WelcomeItem>
</template>
