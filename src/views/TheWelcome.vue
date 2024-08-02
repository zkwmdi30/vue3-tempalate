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
    <template #heading>추가예정...</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>추가예정...</template>
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
    <template #heading>추가예정...</template>
  </WelcomeItem>
</template>
