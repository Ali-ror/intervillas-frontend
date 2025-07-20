<template>
  <main>
    <h1>Ferienhaus Cape Coral</h1>
    <div class="content">
      <section class="description">
        <h2>Ihr Traumurlaub in Florida</h2>
        <p>Entdecken Sie unser luxuriöses Ferienhaus in Cape Coral. Perfekt gelegen mit Wasserzugang und allem Komfort, den Sie für einen unvergesslichen Urlaub benötigen.</p>
      </section>
      <section class="features">
        <h2>Ausstattung</h2>
        <ul>
          <li>Privater Pool</li>
          <li>Bootsdock</li>
          <li>Moderne Küche</li>
          <li>Klimaanlage</li>
          <li>WLAN</li>
          <li>Grill</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .content {
    grid-template-columns: 2fr 1fr;
  }
}

.description, .features {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  color: #34495e;
  font-family: var(--font-body);
}

li:before {
  content: "✓";
  color: #42b983;
  margin-right: 0.5rem;
}

.hero {
  width: 100%;
  height: 110vh;
  background-color: var(--primary-color);
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  margin-top: -80px;
  display: flex;
  align-items: end;
  padding-bottom: 120px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0;  
  position: relative;
  text-align: center;
}
</style> 