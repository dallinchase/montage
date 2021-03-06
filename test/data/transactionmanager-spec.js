/* <copyright>
Copyright (c) 2012, Motorola Mobility LLC.
All Rights Reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of Motorola Mobility LLC nor the names of its
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
</copyright> */
var Montage = require("montage").Montage;
var TransactionId = require("montage/data/transaction-id").TransactionId;
var TransactionManager = require("montage/data/transaction-id").TransactionManager;
var logger = require("montage/core/logger").logger("transactionmanager-spec");

describe("data/transactionmanager-spec",
    function () {
        describe("Creation of Transaction ID",
            function () {
                it("with factory",
                    function () {
                        var id = TransactionId.create().initWithMappingSetName("folder");

                        // expect(id).toBe("manager.name");
                    });

                it("in sequential order and check of before function",
                    function () {
                        var id1 = TransactionId.create().initWithMappingSetName("folder");
                        var id2 = TransactionId.create().initWithMappingSetName("folder");

                        expect(id1.before(id2)).toBe(true);
                        expect(id2.before(id1)).toBe(false);
                    });

                it("in sequential order and check of after function",
                    function () {
                        var id1 = TransactionId.create().initWithMappingSetName("folder");
                        var id2 = TransactionId.create().initWithMappingSetName("folder");

                        expect(id1.after(id2)).toBe(false);
                        expect(id2.after(id1)).toBe(true);
                    });
            });
        describe("Creation of Transaction Manager",
            function () {
                it("singleton",
                    function () {
                        var manager = TransactionId.manager;
                        expect(manager.traceTransactionStart).toBe(false);

                    })
            })

    });
