function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../data/trash")), e = (t(require("../../utils/config")), t(require("../../utils/util")));

Page({
    data: {
        cats: [ {
            title: "湿垃圾",
            imageSrc: "../../images/HouseholdfoodWaste.jpg"
        }, {
            title: "干垃圾",
            imageSrc: "../../images/ResidualWaste.jpg"
        }, {
            title: "可回收物",
            imageSrc: "../../images/RecycleableWaste.jpg"
        }, {
            title: "有害垃圾",
            imageSrc: "../../images/HazardouAwaste.jpg"
        } ],
        testTitleSrc: "../../images/exam_title.png",
        currentQ: 0,
        totalQuizzes: 10,
        answers: [],
        score: 80,
        page: "test",
        withAd: !0
    },
    onLoad: function() {
        var t = this, e = [];
        for (var s in a.default.data) {
            var i = a.default.data[s];
            e.push(i);
        }
        this.setData({
            data: e
        });
        for (var r = [], n = 0; n < this.data.totalQuizzes; n++) {
            var o = Math.floor(4 * Math.random()), h = this.data.data[o][Math.floor(Math.random() * this.data.data[o].length)];
            h.c = parseInt(h.c), r.push(h);
        }
        this.setData({
            quizzes: r
        }), wx.getStorage({
            key: "notInterested",
            success: function(t) {},
            fail: function(a) {
                t.setData({
                    notInterested: !1
                });
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "垃圾分类，看看你能答对几道题？",
            path: "/pages/test/test",
            imageUrl: "../../images/图片2.png"
        };
    },
    select: function(t) {
        var a = this, e = this.data.currentQ, s = parseInt(t.currentTarget.dataset.optionIndex);
        if (void 0 === this.data.answers[e]) {
            var i = this.data.answers;
            if (i[e] = s, this.setData({
                currentQ: ++e,
                answers: i
            }), e > this.data.totalQuizzes - 1) {
                var r = 0;
                i.forEach(function(t, e) {
                    t === parseInt(a.data.quizzes[e].c) - 1 && (r += 1 / a.data.totalQuizzes * 100);
                });
                var n = !this.data.notInterested && r >= 80;
                this.setData({
                    score: r,
                    showShare: !1,
                    showCoupon: n
                });
            }
        }
    },
    restart: function(t) {
        for (var a = [], s = 0; s < this.data.totalQuizzes; s++) {
            var i = Math.floor(4 * Math.random()), r = this.data.data[i][Math.floor(Math.random() * this.data.data[i].length)];
            r.c = parseInt(r.c), a.push(r);
        }
        this.setData({
            quizzes: a,
            currentQ: 0,
            answers: [],
            score: 0,
            showShare: !0
        }), (0, e.default)(102, "");
    },
    share: function() {
        (0, e.default)(103, "");
    },
    toIndex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    withAd: function() {
        this.setData({
            withAd: !0,
            page: "test"
        });
    },
    withoutAd: function() {
        this.setData({
            withAd: !1,
            page: "testNoAd"
        });
    },
    closeAd: function() {
        this.setData({
            withAd: !1,
            page: "testNoAd"
        });
    }
});