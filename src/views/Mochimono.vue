<template>
    <main>
        <headline>
            持ち物・注意事項
        </headline>
        <message-box title="持ち物">
            <ul>
                <li>保険証またはそのコピー</li>
                <li>携帯電話</li>
                <li>2泊3日分の衣類(夜間帯は冷え込みます！)</li>
                <li>寝巻き、歯ブラシなどのアメニティ</li>
                <li>バスタオル・ハンドタオル</li>
                <li>携帯用バッグ</li>
                <li>常備薬</li>
                <li>電源タップ(部屋のコンセントは少ないのでなるべく持ってきてください)</li>
                <li>遊戯具(トランプ、ゲームなど)</li>
                <li>オプショナルで必要なもの</li>
                <li>楽しむ気持ち</li>
            </ul>
        </message-box>
        <message-box title="注意事項">
            <ul>
                <li>時間厳守で行動してください。やむを得ず遅れる場合は必ず幹事に連絡しましょう。 </li>
                <li>バス出発時に自分の荷物が積まれているか確認してください。</li>
                <li>持ち物に名前を書きましょう。</li>
                <li>各自、体調管理に気をつけましょう。常備薬は各自で用意してください。</li>
            </ul>
        </message-box>
        <message-box title="宿の情報">
            <h3>宿にあるもの</h3>
            <ul>
                <li>ドライヤー</li>
                <li>冷蔵庫</li>
                <li>ハンガー</li>
                <li>タオル干し台</li>
                <li>テレビ(HDMIは挿せます)</li>
                <li>自販機</li>
                <li>カミソリ</li>
                <li>髪クシ</li>
                <li>Wi-Fi(ロビーのみ)</li>
            </ul>
            <h3>有料のもの</h3>
            <ul>
                <li>歯ブラシ(50円)</li>
                <li>フェイスタオル(150円)</li>
                <li>バスタオル(レンタル100円)</li>
            </ul>
            <h3>宿にないもの</h3>
            <ul>
                <li>部屋風呂</li>
                <li>Wi-Fi(ロビーにはあります)</li>
            </ul>
            <h3>その他</h3>
            <ul>
                <li>コンセントは各部屋２つほどありますが、電源タップは持ってきた方がいいです！</li>
            </ul>
        </message-box>
        <message-box title="宿泊先">
            <ul>
                <li>帝国ホテル</li>
                <li>東京都千代田区内幸町1-1-1</li>
                <li>TEL：03-3504-1111</li>
                <li><a href="https://www.imperialhotel.co.jp/j/" target="_blank">https://www.imperialhotel.co.jp/j/</a></li>
            </ul>
        </message-box>
        <the-footer/>
    </main>
</template>

<script>
    import MessageBox from "../components/MessageBox"
    import Headline from "../components/Headline"
    import TheFooter from "../components/TheFooter"

    export default {
        name: "Mochimono",
        components: {
            MessageBox,
            Headline,
            TheFooter,
        }
    }
</script>

<style scoped>

</style>
