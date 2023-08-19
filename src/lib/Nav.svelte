<script lang="ts">
    let length = 0;
    export const onscroll = () => {
        const body = document.body.getBoundingClientRect();
        length = window.scrollY / (body.bottom - body.top - window.innerHeight);
        console.log(length);
    }
    onscroll();
    document.addEventListener('scroll', onscroll);
</script>

<div class="fixed left-0 top-0 z-10 min-w-full bg-slate-200">
    <p>Nav Here</p>
    <progress class="min-w-full max-h-2 bg-red-500" value={length} max={1} />
</div>
