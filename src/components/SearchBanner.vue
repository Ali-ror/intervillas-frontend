<script setup>
defineProps({
  title: {
    type: String,
    default: 'Ferienhäuser in Cape Coral'
  }
})
</script>

<template>
  <div class="hero-banner">
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <form class="search-form">
        <div class="form-group">
          <label>Reisezeitraum</label>
          <div class="date-inputs">
            <input type="date" class="form-control" placeholder="Anreise">
            <input type="date" class="form-control" placeholder="Abreise">
          </div>
        </div>
        <div class="form-group">
          <label>Personen</label>
          <select class="form-control">
            <option>Bitte auswählen</option>
            <option>2 Personen</option>
            <option>3 Personen</option>
            <option>4 Personen</option>
            <option>5+ Personen</option>
          </select>
        </div>
        <div class="form-group">
          <label>Schlafzimmer</label>
          <select class="form-control">
            <option>mind. 2</option>
            <option>mind. 3</option>
            <option>mind. 4</option>
            <option>mind. 5</option>
          </select>
        </div>
        <button type="submit" class="search-button">Suchen</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/background-intervillas.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-top: -80px;
  padding-top: 80px;
}

.hero-content {
  width: 100%;
  max-width: 1400px;
  text-align: left;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 0;
  font-family: 'Quicksand', sans-serif;
}

.search-form {
  max-width: 1400px;
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  background: rgba(23, 60, 58, 0.3);
  padding: 2rem;
  border-radius: 14px;
  margin-top: 0;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-family: 'Quicksand', sans-serif;
}

.date-inputs {
  display: flex;
  gap: 1rem;
}

.date-inputs .form-control {
  width: 100%;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--white);
  background: transparent;
  color: var(--white);
  border-radius: 14px;
  font-family: 'Quicksand', sans-serif;
}

.form-control::placeholder {
  color: var(--white);
}

.form-control option {
  background: var(--primary-color);
  color: var(--white);
}

.search-button {
  background: var(--white);
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;
  font-family: 'Quicksand', sans-serif;
  height: 45px;
  opacity: 1;
  font-size: 1rem;
}

.search-button:hover {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .hero-content {
    padding: 0 1rem;
  }
  
  .search-form {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .form-group {
    width: 100%;
  }

  .search-button {
    width: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: 100vh;
    min-height: 700px;
    padding-top: 100px;
    padding-bottom: 2rem;
    align-items: flex-start;
  }

  .hero-content {
    padding: 0 1rem;
    gap: 2rem;
  }

  .hero-content h1 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .search-form {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .date-inputs {
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    margin-bottom: 0;
  }

  .form-control {
    height: 45px;
  }
}
</style> 