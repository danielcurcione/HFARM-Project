<template>
  <div id="dropdown" class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button is-white" aria-haspopup="true" aria-controls="dropdown-menu">
        <img src="../assets/edit.svg" width="20px">
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a class="dropdown-item">
          Edit
        </a>
        <a class="dropdown-item">
          Delete
        </a>
      </div>
    </div>
  </div>
</template>