import { IHeroBanner } from './interaces/IHeroBanner';
import { IProduct } from './interaces/IProduct';

export const MOCK_HERO_BANNERS: IHeroBanner[] = [
  {
    imageUrl:
      'http://app-storage-002.cafe24.com/bannermanage2/yujinjoe000/2019/09/19/6bd895bdbd3beb5ab14986ba593ec317.jpg',
    link: '',
    title: '모-든 취미\n무-료 배송',
  },
  {
    imageUrl:
      'http://app-storage-002.cafe24.com/bannermanage2/yujinjoe000/2019/09/19/546c9d60c10e6db7abbfec92390af5e8.jpg',
    link: '',
    title: '',
  },
  {
    imageUrl:
      'http://app-storage-002.cafe24.com/bannermanage2/yujinjoe000/2019/07/11/dae205b256632c031a3f1595e090a319.jpg',
    link: '',
    title: '',
  },
];

export const MOCK_PRODUCTS: IProduct[] = [
  {
    id: '3242343424324',
    title: '수채화 컬러링 북 세트',
    thumbnail: 'http://hobbyinthebox.co.kr/web/product/medium/201901/b5490a8b381bab6568239f751456a55d.jpg',
    description: `<p></p><div style="text-align: center;"><img alt="" style="font-size: 9pt;" src="/web/upload/NNEditor/20190722/플라밍고시리즈-상세1_shop1_105603.jpg"></div><p>&nbsp;</p><div style="text-align: center;"><img alt="" style="font-size: 9pt;" src="/web/upload/NNEditor/20190722/플라밍고시리즈-상세2_shop1_105603.jpg"></div><p>&nbsp;</p><div style="text-align: center;"><img alt="" style="font-size: 9pt;" src="/web/upload/NNEditor/20190722/플라밍고시리즈-상세3_shop1_105604.jpg"></div><p>&nbsp;</p><div style="text-align: center;"><img alt="" style="font-size: 9pt;" src="/web/upload/NNEditor/20190722/플라밍고시리즈-상세4_shop1_105604.jpg"></div><p>&nbsp;</p><br><p></p>`,
    listPrice: 29000,
    netPrice: 23000,
  },
  {
    title: '꼬마 공룡비누 만들기 세트 DIY KIT 취미 박스',
    thumbnail: 'http://hobbyinthebox.co.kr/web/product/medium/201907/c73355c741ac3687c3fb7772c64749da.jpg',
    listPrice: 26900,
  },
  {
    title: '쥬얼피쉬 카드지갑 (9컬러)',
    thumbnail: 'http://hobbyinthebox.co.kr/web/product/medium/201905/cc466ad3565f8b04427e9c7d14676324.jpg',
    listPrice: 9800,
    netPrice: 5200,
  },
  {
    title: '미니하트 망주머니 3색 석고방향제 만들기 KIT',
    thumbnail: 'http://hobbyinthebox.co.kr/web/product/medium/201908/a6fcc863acfe52e414490b4ffd49c90c.jpg',
    listPrice: 19900,
    netPrice: 4800,
  },
  {
    title: '캘리그라피 입문 세트',
    thumbnail: 'http://hobbyinthebox.co.kr/web/product/medium/201908/e77d53ccd8216b1d953e9bdc2b93df05.png',
    listPrice: 29900,
    netPrice: 28000,
  },
];
