<template>
  <div class="about">
    <h1>This is an privew about</h1>
    <div>
      <% if (options['ui-framework'] === 'iview') {%>
        <i-button>iview-btn</i-button>
      <% } %>

      <% if (options['ui-framework'] === 'element-ui') {%>
        <el-button>elementUI-btn</el-button>
      <% } %>
      
      <% if (options['ui-framework'] === 'antd') {%>
        <div>
          <a-button type="primary">antd-btn</a-button>
        </div>
      <% } %>
    </div>
  </div>
</template>
