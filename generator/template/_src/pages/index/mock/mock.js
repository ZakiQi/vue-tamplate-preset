import Mock from 'mockjs'
import testData from './mockData/testData'
console.log(testData, 'testData')

// tableData
Mock.mock('/data/tableData?data=1', 'get', testData)
