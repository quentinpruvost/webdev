<script lang="ts">
</script>

<div class="animated-gradient" role="presentation"></div>

<style>
  .animated-gradient {
    /* Positionnement pour couvrir tout l'écran, en arrière-plan */
    position: fixed;
    inset: 0;
    z-index: -10;
    
    /* Le dégradé avec plusieurs couleurs douces */
    background-image: linear-gradient(
      -45deg, 
      #e0f2fe, /* sky-100 */
      #c7d2fe, /* indigo-200 */
      #fbcfe8, /* pink-200 */
      #d1fae5  /* emerald-100 */
    );

    /* C'est la magie : on rend le fond 4x plus grand que l'écran */
    background-size: 400% 400%;

    /* On applique notre animation CSS */
    animation: moveGradient 15s ease infinite;
  }

  /* On définit les étapes de l'animation */
  @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>