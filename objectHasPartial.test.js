import assert from "assert";
import objectHasPartial from "./objectHasPartial.js";

describe('objectHasPartial', function () {

    it('should skip when undefined value shows up', function () {
        assert.equal(
            objectHasPartial(
                { x: undefined },
                { x: { r: true } }
            ),
            true
        );
    });

    it('should return false when unknown key in source', function () {
        assert.equal(
            objectHasPartial(
                { r: undefined },
                { x: { r: true } }
            ),
            false
        );
    });

    it('should match equally', function () {
        assert.equal(
            objectHasPartial(
                { x: { a: { r: { r: { n: { n: "hello" } } } } } },
                { x: { a: { r: { r: { n: { n: "hello" } } } } } }
            ),
            true
        );
    });
});
