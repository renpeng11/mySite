import { observable, action } from 'mobx';
import { zhCN, enUS } from "../i18n";

// 初始化语言
class LanguageData {
  @observable language = zhCN
  @action.bound changeLanguage(type) {
    if (type === "zh-CN") {
      this.language = zhCN;
    } else if (type === "en-US") {
      this.language = enUS;
    }
  }
}

export default LanguageData;