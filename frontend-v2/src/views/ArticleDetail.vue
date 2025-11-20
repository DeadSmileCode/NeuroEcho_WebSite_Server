<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const route = useRoute();
const article = ref(null);
const content = ref('');
const md = new MarkdownIt();

onMounted(async () => {
  try {
    // Fetch metadata to find the filename
    const metaResponse = await fetch('/articles/metadata.json');
    const metadata = await metaResponse.json();
    article.value = metadata.find(a => a.id === parseInt(route.params.id));

    if (article.value) {
      // Fetch markdown content
      const contentResponse = await fetch(`/articles/${article.value.filename}`);
      const text = await contentResponse.text();
      content.value = md.render(text);
    }
  } catch (error) {
    console.error('Failed to load article:', error);
  }
});
</script>

<template>
  <main class="main">
    <section class="section" v-if="article">
      <div class="container">
        <div class="article-header">
          <h1 class="poppins">{{ article.title }}</h1>
          <p class="meta livvic">{{ article.date }} • {{ article.author }}</p>
        </div>
        
        <div class="article-content" v-html="content"></div>
        
        <div class="back-link">
          <router-link to="/articles" class="button">Back to Articles</router-link>
        </div>
      </div>
    </section>
    <section class="section" v-else>
      <div class="container">
        <p>Loading article...</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.article-header {
  text-align: center;
  margin-bottom: 3rem;
}

.article-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.meta {
  color: #666;
  font-size: 1.1rem;
}

.article-content {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Livvic', sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #2c3e50;
}

.article-content :deep(h2) {
  font-family: 'Poppins', sans-serif;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.article-content :deep(p) {
  margin-bottom: 1.5rem;
}

.back-link {
  text-align: center;
  margin-top: 4rem;
}
</style>
