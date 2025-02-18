<script setup lang="ts">
type SizeProps = {size: number};
type RowsColProps = {rows: number, columns: number};

type Props =
  | SizeProps
  | RowsColProps;

const props = defineProps<Props>();

function isSizeProps(props: Props): props is SizeProps {
  return "size" in props && props.size !== undefined;
}

function isRowsColumnsProps(props: Props): props is RowsColProps {
  return "rows" in props && props.rows !== undefined;
}

const rows = isSizeProps(props) ? props.size
            : isRowsColumnsProps(props) ? props.rows : 0;

const columns = isSizeProps(props) ? props.size
            : isRowsColumnsProps(props) ? props.columns : 0;
</script>

<template>
  <table>
    <tbody>
      <tr v-for="i in rows">
        <td v-for="j in columns">
          {{ i * j }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>