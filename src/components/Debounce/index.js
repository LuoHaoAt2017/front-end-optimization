import React from 'react';
import './index.scss';
import GPS from '@/assets/svg/gps.svg';
import Search from '@/assets/svg/search.svg';
import { Spin } from 'antd';
// 定制一个输入建议框 auto-complete

// 抖动：在一段时间内，多次触发同一个事件，以最后一次触发为准。

class Debounce extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            suggest: {
                id: '',
                label: '',
                value: ''
            },
            suggests: []
        }
        this.timer = null;
        this.interval = 3000;
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {suggest, suggests, loading} = this.state;
        const onSelect = this.handleSelect;
        const onChange = this.handleChange;
        return (
            <div className='debounce-container'>
                <div className='input-container'>
                    <span className='common input-prefix'>
                        <GPS></GPS>
                    </span>
                    <input
                        className='common auto-input'
                        value={suggest.label}
                        onChange={onChange}
                    />
                    <span className='common input-suffix'>
                        <Search></Search>
                    </span>
                </div>
                {
                    loading ? <Spin className='suggest-load'></Spin> : suggests.length > 0 ? (
                        <ul className='suggest-list' onClick={onSelect}>
                            {
                                suggests.map((elem, index) => {
                                    return (
                                        <li className='suggest' data-suggest={JSON.stringify(elem)} key={index}>
                                            {elem.label}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ) : null
                }
            </div>
        )
    }

    handleChange(evt) {
        let value = evt.target.value;
        this.setState((state) => ({
            suggest: {
                ...state.suggest,
                label: value
            }
        }));
        if (!value) { return; }
        this.setState({
            loading: true
        });
        // 清除前一个定时器
        if (this.timer) {
            clearTimeout(this.timer);
        }
        // 创建当前定时器，过了interval时间，
        // 没有触发新的事件，就执行最后一个定时器。
        this.timer = setTimeout(() => {
            this.getSuggests(value).then(res => {
                this.setState({
                    suggests: res,
                    loading: false
                });
            });
        }, this.interval);
    }

    handleSelect(evt) {
        const target = JSON.parse(evt.target.dataset.suggest);
        this.setState({
            suggest: target
        });
    }

    getSuggests(param) {
        // 模拟网络请求
        console.log('request...');
        return new Promise(function(resolve) {
            setTimeout(() => {
                const suggests = [
                    { value: "三全鲜食（北新泾店）", label: "长宁区新渔路144号" },
                    { value: "Hot honey 首尔炸鸡（仙霞路）", label: "上海市长宁区淞虹路661号" },
                    { value: "新旺角茶餐厅", label: "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { value: "泷千家(天山西路店)", label: "天山西路438号" },
                    { value: "胖仙女纸杯蛋糕（上海凌空店）", label: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { value: "贡茶", label: "上海市长宁区金钟路633号" },
                    { value: "豪大大香鸡排超级奶爸", label: "上海市嘉定区曹安公路曹安路1685号" },
                    { value: "茶芝兰（奶茶，手抓饼）", label: "上海市普陀区同普路1435号" },
                    { value: "十二泷町", label: "上海市北翟路1444弄81号B幢-107" },
                    { value: "星移浓缩咖啡", label: "上海市嘉定区新郁路817号" },
                    { value: "阿姨奶茶/豪大大", label: "嘉定区曹安路1611号" },
                    { value: "新麦甜四季甜品炸鸡", label: "嘉定区曹安公路2383弄55号" },
                    { value: "Monica摩托主题咖啡店", label: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { value: "浮生若茶（凌空soho店）", label: "上海长宁区金钟路968号9号楼地下一层" },
                    { value: "NONO JUICE  鲜榨果汁", label: "上海市长宁区天山西路119号" },
                    { value: "CoCo都可(北新泾店）", label: "上海市长宁区仙霞西路" },
                    { value: "快乐柠檬（神州智慧店）", label: "上海市长宁区天山西路567号1层R117号店铺" },
                    { value: "Merci Paul cafe", label: "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { value: "猫山王（西郊百联店）", label: "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { value: "枪会山", label: "上海市普陀区棕榈路" },
                    { value: "纵食", label: "元丰天山花园(东门) 双流路267号" },
                    { value: "钱记", label: "上海市长宁区天山西路" },
                    { value: "壹杯加", label: "上海市长宁区通协路" },
                    { value: "唦哇嘀咖", label: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { value: "爱茜茜里(西郊百联)", label: "长宁区仙霞西路88号1305室" },
                    { value: "爱茜茜里(近铁广场)", label: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { value: "鲜果榨汁（金沙江路和美广店）", label: "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { value: "开心丽果（缤谷店）", label: "上海市长宁区威宁路天山路341号" },
                    { value: "超级鸡车（丰庄路店）", label: "上海市嘉定区丰庄路240号" },
                    { value: "妙生活果园（北新泾店）", label: "长宁区新渔路144号" },
                    { value: "香宜度麻辣香锅", label: "长宁区淞虹路148号" },
                    { value: "凡仔汉堡（老真北路店）", label: "上海市普陀区老真北路160号" },
                    { value: "港式小铺", label: "上海市长宁区金钟路968号15楼15-105室" },
                    { value: "蜀香源麻辣香锅（剑河路店）", label: "剑河路443-1" },
                    { value: "北京饺子馆", label: "长宁区北新泾街道天山西路490-1号" },
                    { value: "饭典*新简餐（凌空SOHO店）", label: "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { value: "焦耳·川式快餐（金钟路店）", label: "上海市金钟路633号地下一层甲部" },
                    { value: "动力鸡车", label: "长宁区仙霞西路299弄3号101B" },
                    { value: "浏阳蒸菜", label: "天山西路430号" },
                    { value: "四海游龙（天山西路店）", label: "上海市长宁区天山西路" },
                    { value: "樱花食堂（凌空店）", label: "上海市长宁区金钟路968号15楼15-105室" },
                    { value: "壹分米客家传统调制米粉(天山店)", label: "天山西路428号" },
                    { value: "福荣祥烧腊（平溪路店）", label: "上海市长宁区协和路福泉路255弄57-73号" },
                    { value: "速记黄焖鸡米饭", label: "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { value: "红辣椒麻辣烫", label: "上海市长宁区天山西路492号" },
                    { value: "(小杨生煎)西郊百联餐厅", label: "长宁区仙霞西路88号百联2楼" },
                    { value: "阳阳麻辣烫", label: "天山西路389号" },
                    { value: "南拳妈妈龙虾盖浇饭", label: "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
                const results = suggests.filter(elem => {
                    return elem.label.indexOf(param) > -1;
                });
                console.log('response...');
                resolve(results);
            }, 0);
        });
    }
}

export default Debounce;
