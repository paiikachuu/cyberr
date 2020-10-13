<template>
  <aside class="col-sm-5 p-2 border-right">
    <article class="gallery-wrap">
      <div class="img-big-wrap">
        <div>
          <a href="#">
            <img src="/images/laptop-nitro5.png" />
          </a>
        </div>
      </div>
      <div class="img-small-wrap">
        <div class="item-gallery">
          <img src="/images/laptop-nitro5.png" />
        </div>
        <div class="item-gallery">
          <img src="/images/laptop-nitro5.png" />
        </div>
        <div class="item-gallery">
          <img src="/images/laptop-nitro5.png" />
        </div>
        <div class="item-gallery">
          <img src="/images/laptop-nitro5.png" />
        </div>
      </div>
    </article>
  </aside>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.gallery-wrap .img-small-wrap .item-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  margin: 7px 2px;
  display: inline-block;
  overflow: hidden;
}

.gallery-wrap .img-small-wrap {
  text-align: center;
}
.gallery-wrap .img-small-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: zoom-in;
}

.gallery-wrap .img-big-wrap img {
  height: 375px;
  max-height: 375px;
  max-width: 465px;
  width: auto;
  display: inline-block;
  cursor: zoom-in;
}
</style>
