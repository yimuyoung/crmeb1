<template>
  <div>
    <!-- <cards-data
      :cardLists="cardLists"
      v-if="cardLists.length >= 0"
    ></cards-data> -->
    <table-form @getList="getData" />
    <table-list ref="table" @on-changeCards="getCards" @changeGetTabs="changeGetTabs" />
  </div>
</template>

<script>
import cardsData from '../../../components/cards/cards';
import tableForm from './components/tableFrom';
import tableList from './components/tableList';
export default {
  name: 'orderlistDetails',
  components: {
    tableForm,
    tableList,
    cardsData,
  },
  data() {
    return {
      currentTab: '',
      cardLists: [],
    };
  },
  methods: {
    changeGetTabs() {
      this.$parent.getTabs();
    },
    // 列表数据
    getData(res) {
      this.$refs.table.getList(res);
    },
    // 模块数据
    getCards(list) {
      this.cardLists = list;
    },
    handleResize() {
      this.$refs.ellipsis.forEach((item) => item.init());
    },
  },
  mounted() {},
};
</script>

<style scoped lang="stylus">
.card_cent >>> .ivu-card-body {
  width: 100%;
  height: 100%;
}

.card_box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 4px;

  .card_box_img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card_box_txt {
    .sp1 {
      display: block;
      color: #252631;
      font-size: 24px;
    }

    .sp2 {
      display: block;
      color: #98A9BC;
      font-size: 12px;
    }
  }
}
</style>
