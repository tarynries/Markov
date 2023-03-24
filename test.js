// import makeText from "./markov"
// const MarkovMachine = require("./markov")
const { makeChains } = require("./markov");


test("make text", function () {
    // let chain = makeChains();
    expect(makeChains(['the cat in the hat'])).toEqual({
        chain: {
            text: expect.any(String)
        }
    });
});