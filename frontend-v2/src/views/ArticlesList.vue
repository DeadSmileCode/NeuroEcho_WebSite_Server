<script setup>
import { ref, onMounted } from 'vue';

const articles = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/articles/metadata.json');
    articles.value = await response.json();
  } catch (error) {
    console.error('Failed to load articles:', error);
  }
});
</script>

<template>
  <main class="main">
    <section class="section">
      <div class="container">
        <div class="features-header">
          <h2><span>Latest</span> Articles</h2>
          <p>Read our latest updates and research.</p>
        </div>

        <div class="articles-grid">
          <div v-for="article in articles" :key="article.id" class="article-card">
            <router-link :to="'/article/' + article.id" class="article-link">
              <h3>{{ article.title }}</h3>
              <p class="meta">{{ article.date }} • {{ article.author }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.features-header h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.features-header p {
  font-size: 1.2rem;
  color: #666;
}

.articles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.article-card {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-link {
  text-decoration: none;
  color: inherit;
}

.article-link h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.meta {
  font-family: 'Livvic', sans-serif;
  color: #666;
  font-size: 0.9rem;
}
</style>
