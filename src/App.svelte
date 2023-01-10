<script>
    import Component from './Component.svelte';

    export let label = 'empty';
</script>

<p>App {label} works</p>

<Component {label} />
