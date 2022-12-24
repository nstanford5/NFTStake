// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const map0_ctc = ctc3;
  
  
  const _dead = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v610, v611, v621] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      dead: {
        decode: _dead,
        dom: [],
        rng: ctc1
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    deadline: ctc1,
    rewards: ctc1,
    tok: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    deposit0_73: ctc5,
    wd0_73: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v600 = stdlib.protect(ctc4, interact.params, 'for Admin\'s interact field params');
  const v601 = v600.deadline;
  const v602 = v600.rewards;
  const v603 = v600.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v603, v601, v602],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v610, v611, v612], secs: v614, time: v613, didSend: v35, from: v609 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v610
        });
      ;
      const v619 = await ctc.getContractInfo();
      
      const v621 = stdlib.checkedBigNumberify('./index.rsh:36:37:decimal', stdlib.UInt_max, '0');
      const v622 = v613;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v610
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v610, v611, v612], secs: v614, time: v613, didSend: v35, from: v609 } = txn1;
  ;
  ;
  const v619 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v619), {
    at: './index.rsh:33:22:application',
    fs: ['at ./index.rsh:33:22:application call to [unknown function] (defined at: ./index.rsh:33:22:function exp)', 'at ./index.rsh:33:22:application call to "liftedInteract" (defined at: ./index.rsh:33:22:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v621 = stdlib.checkedBigNumberify('./index.rsh:36:37:decimal', stdlib.UInt_max, '0');
  let v622 = v613;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v701], secs: v703, time: v702, didSend: v458, from: v700 } = txn3;
    switch (v701[0]) {
      case 'deposit0_73': {
        const v704 = v701[1];
        undefined /* setApiDetails */;
        const v709 = stdlib.eq(v621, stdlib.checkedBigNumberify('./index.rsh:43:24:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v709, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'sorry, this contract is already occupied',
          who: 'Admin'
          });
        const v711 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v700, ctc1), null);
        const v712 = {
          None: 0,
          Some: 1
          }[v711[0]];
        const v713 = stdlib.eq(v712, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v713, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'you are already here',
          who: 'Admin'
          });
        ;
        ;
        const v757 = stdlib.safeAdd(v702, v611);
        await stdlib.mapSet(map0, ctc7, v700, ctc1, v757);
        await txn3.getOutput('deposit', 'v757', ctc1, v757);
        const v763 = stdlib.safeAdd(v621, stdlib.checkedBigNumberify('./index.rsh:49:26:decimal', stdlib.UInt_max, '1'));
        const cv621 = v763;
        const cv622 = v702;
        
        v621 = cv621;
        v622 = cv622;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'wd0_73': {
        const v792 = v701[1];
        undefined /* setApiDetails */;
        const v810 = stdlib.eq(v621, stdlib.checkedBigNumberify('./index.rsh:53:24:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v810, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'No assets here to withdraw',
          who: 'Admin'
          });
        const v812 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v700, ctc1), null);
        const v813 = {
          None: 0,
          Some: 1
          }[v812[0]];
        const v814 = stdlib.eq(v813, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v814, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'this function is not for you',
          who: 'Admin'
          });
        ;
        ;
        ;
        await stdlib.mapSet(map0, ctc7, v700, ctc1, undefined /* Nothing */);
        const v872 = true;
        await txn3.getOutput('wd', 'v872', ctc8, v872);
        const v878 = stdlib.safeSub(v621, stdlib.checkedBigNumberify('./index.rsh:61:26:decimal', stdlib.UInt_max, '1'));
        const cv621 = v878;
        const cv622 = v702;
        
        v621 = cv621;
        v622 = cv622;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Data({
    deposit0_73: ctc4,
    wd0_73: ctc4
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v610, v611, v621] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc1]);
  const v640 = ctc.selfAddress();
  const v642 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to "rundeposit0_73" (defined at: ./index.rsh:42:10:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v643 = stdlib.eq(v621, stdlib.checkedBigNumberify('./index.rsh:43:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v643, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to "rundeposit0_73" (defined at: ./index.rsh:42:10:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)'],
    msg: 'sorry, this contract is already occupied',
    who: 'deposit'
    });
  const v645 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v640, ctc1), null);
  const v646 = {
    None: 0,
    Some: 1
    }[v645[0]];
  const v647 = stdlib.eq(v646, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v647, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to "rundeposit0_73" (defined at: ./index.rsh:42:10:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)'],
    msg: 'you are already here',
    who: 'deposit'
    });
  const v652 = ['deposit0_73', v642];
  
  const txn1 = await (ctc.sendrecv({
    args: [v610, v611, v621, v652],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:31:15:decimal', stdlib.UInt_max, '1'), v610]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v701], secs: v703, time: v702, didSend: v458, from: v700 } = txn1;
      
      switch (v701[0]) {
        case 'deposit0_73': {
          const v704 = v701[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc5, v700, ctc1), null);
          ;
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v610
            });
          const v757 = stdlib.safeAdd(v702, v611);
          await stdlib.simMapSet(sim_r, 0, ctc5, v700, ctc1, v757);
          const v758 = await txn1.getOutput('deposit', 'v757', ctc1, v757);
          
          const v763 = stdlib.safeAdd(v621, stdlib.checkedBigNumberify('./index.rsh:49:26:decimal', stdlib.UInt_max, '1'));
          const v1346 = v763;
          sim_r.isHalt = false;
          
          break;
          }
        case 'wd0_73': {
          const v792 = v701[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v701], secs: v703, time: v702, didSend: v458, from: v700 } = txn1;
  switch (v701[0]) {
    case 'deposit0_73': {
      const v704 = v701[1];
      undefined /* setApiDetails */;
      const v709 = stdlib.eq(v621, stdlib.checkedBigNumberify('./index.rsh:43:24:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v709, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'sorry, this contract is already occupied',
        who: 'deposit'
        });
      const v711 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v700, ctc1), null);
      const v712 = {
        None: 0,
        Some: 1
        }[v711[0]];
      const v713 = stdlib.eq(v712, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:25:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'you are already here',
        who: 'deposit'
        });
      ;
      ;
      const v757 = stdlib.safeAdd(v702, v611);
      await stdlib.mapSet(map0, ctc5, v700, ctc1, v757);
      const v758 = await txn1.getOutput('deposit', 'v757', ctc1, v757);
      if (v458) {
        stdlib.protect(ctc0, await interact.out(v704, v758), {
          at: './index.rsh:42:11:application',
          fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:11:function exp)', 'at ./index.rsh:48:12:application call to "ret" (defined at: ./index.rsh:45:37:function exp)', 'at ./index.rsh:45:37:application call to [unknown function] (defined at: ./index.rsh:45:37:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v763 = stdlib.safeAdd(v621, stdlib.checkedBigNumberify('./index.rsh:49:26:decimal', stdlib.UInt_max, '1'));
      const v1346 = v763;
      return;
      
      break;
      }
    case 'wd0_73': {
      const v792 = v701[1];
      return;
      break;
      }
    }
  
  
  };
export async function _wd3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _wd3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _wd3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Data({
    deposit0_73: ctc4,
    wd0_73: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v610, v611, v621] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc1]);
  const v654 = ctc.selfAddress();
  const v656 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to "runwd0_73" (defined at: ./index.rsh:52:10:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)'],
    msg: 'in',
    who: 'wd'
    });
  const v657 = stdlib.eq(v621, stdlib.checkedBigNumberify('./index.rsh:53:24:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to "runwd0_73" (defined at: ./index.rsh:52:10:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)'],
    msg: 'No assets here to withdraw',
    who: 'wd'
    });
  const v659 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v654, ctc1), null);
  const v660 = {
    None: 0,
    Some: 1
    }[v659[0]];
  const v661 = stdlib.eq(v660, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v661, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to "runwd0_73" (defined at: ./index.rsh:52:10:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)'],
    msg: 'this function is not for you',
    who: 'wd'
    });
  const v666 = ['wd0_73', v656];
  
  const txn1 = await (ctc.sendrecv({
    args: [v610, v611, v621, v666],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:55:19:decimal', stdlib.UInt_max, '0'), v610]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v701], secs: v703, time: v702, didSend: v458, from: v700 } = txn1;
      
      switch (v701[0]) {
        case 'deposit0_73': {
          const v704 = v701[1];
          
          break;
          }
        case 'wd0_73': {
          const v792 = v701[1];
          sim_r.txns.push({
            kind: 'api',
            who: "wd"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc5, v700, ctc1), null);
          ;
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v700,
            tok: v610
            });
          await stdlib.simMapSet(sim_r, 0, ctc5, v700, ctc1, undefined /* Nothing */);
          const v872 = true;
          const v873 = await txn1.getOutput('wd', 'v872', ctc7, v872);
          
          const v878 = stdlib.safeSub(v621, stdlib.checkedBigNumberify('./index.rsh:61:26:decimal', stdlib.UInt_max, '1'));
          const v1352 = v878;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v701], secs: v703, time: v702, didSend: v458, from: v700 } = txn1;
  switch (v701[0]) {
    case 'deposit0_73': {
      const v704 = v701[1];
      return;
      break;
      }
    case 'wd0_73': {
      const v792 = v701[1];
      undefined /* setApiDetails */;
      const v810 = stdlib.eq(v621, stdlib.checkedBigNumberify('./index.rsh:53:24:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v810, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'No assets here to withdraw',
        who: 'wd'
        });
      const v812 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v700, ctc1), null);
      const v813 = {
        None: 0,
        Some: 1
        }[v812[0]];
      const v814 = stdlib.eq(v813, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v814, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:36:35:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'this function is not for you',
        who: 'wd'
        });
      ;
      ;
      ;
      await stdlib.mapSet(map0, ctc5, v700, ctc1, undefined /* Nothing */);
      const v872 = true;
      const v873 = await txn1.getOutput('wd', 'v872', ctc7, v872);
      if (v458) {
        stdlib.protect(ctc0, await interact.out(v792, v873), {
          at: './index.rsh:52:11:application',
          fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:60:12:application call to "ret" (defined at: ./index.rsh:55:35:function exp)', 'at ./index.rsh:55:35:application call to [unknown function] (defined at: ./index.rsh:55:35:function exp)'],
          msg: 'out',
          who: 'wd'
          });
        }
      else {
        }
      
      const v878 = stdlib.safeSub(v621, stdlib.checkedBigNumberify('./index.rsh:61:26:decimal', stdlib.UInt_max, '1'));
      const v1352 = v878;
      return;
      
      break;
      }
    }
  
  
  };
export async function deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deposit3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function wd(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for wd expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for wd expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _wd3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_2((uint64,(byte,byte[0])))void`, `deposit()uint64`, `wd()byte`],
    pure: [`dead()uint64`],
    sigs: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_2((uint64,(byte,byte[0])))void`, `dead()uint64`, `deposit()uint64`, `wd()byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAIAAEIBNSTAQMQoI0GJgIBAAAxGEEB9ilkSSJbNQEkWzUCKGSCBQQDr6M8BE3EknEEftXKLAS4hDVoBLrMROY2GgCOBQGkAd8BtAHiAk8ANA8iEkQpJK8oMQBQiAJMIlUiEkQjNBExFjQAIwhJNQAJRwM4FDIKEkQ4ECUSRDgRTwISRDgSEkQyBjQQCDULIQQoMQBQNAsWiAI1gAgAAAAAAAAC9TQLFlCwNAsWNQQ0DyMIMgY1DjUPNBEWNBAWUDQPFlAhBTIGNQI1AShMVwAYZyk0ARY0AhZQZzEZIhJEiAHhNANAAAqABBUffHU0BFCwI0M0DyMSRCkkrygxAFCIAagiVSMSRCM0ETEAiAGmIQQoMQBQvCJOAk00Bwg1ByM1C4AIAAAAAAAAA2g0CxZRBwhQsDQLFlEHCDUENA8jCTIGNQ41D0L/byJEMRkiEkRC/5SBCa81CyEFNAESREkiWzURSSRbNRAhBls1DzQLIls1DDQLVwgBNQ2ABNXeBsE0DBZQNA1QsDQMiAEsNA0iVY0CALsAvkL+tIAJAAAAAAAAAAABNQtC/640CyJbNQw0CyRbNRE0CyEGWzUQgAT27avSNAwWUDQRFlA0EBZQNAtXGAhQsDQMiADeIQeIAMAiNBEyCogAzSIyBjUONQ9C/saIALEhB4gApjYaATULQv+oiAChNhoBNQtC/0siMTQSRIECMTUSRCIxNhJEIjE3EkSIAIGBGK8iIkL+mkL/GUL/IEhMv0iJIrIBJbIQshSyEbISs4kisgEjshCyB7IIs4lC/fpC/ptIiUwJSTUGMgmIAHmJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJMRmBBRJEiAAxIjIKMgmIAEdC/kVC/vo0Bgg1BokjNQOJvkkWUQcIRQRNUImxQv9/SSISTDQCEhFEiTQGNAdKD0H/jkL/lkxJvUD/XksDiP/GQv9WsUL/ZbGyCUL/Xw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `47`,
    101: `55`,
    102: `56`,
    103: `56`,
    104: `59`,
    105: `59`,
    106: `60`,
    107: `60`,
    108: `61`,
    109: `62`,
    11: `2`,
    110: `63`,
    111: `64`,
    112: `64`,
    113: `65`,
    114: `66`,
    115: `66`,
    116: `67`,
    117: `67`,
    118: `68`,
    119: `68`,
    12: `2`,
    120: `69`,
    121: `70`,
    122: `71`,
    123: `71`,
    124: `72`,
    125: `73`,
    126: `74`,
    127: `75`,
    128: `75`,
    129: `76`,
    13: `2`,
    130: `76`,
    131: `77`,
    132: `78`,
    133: `79`,
    134: `79`,
    135: `80`,
    136: `81`,
    137: `84`,
    138: `84`,
    139: `85`,
    14: `2`,
    140: `85`,
    141: `86`,
    142: `87`,
    143: `87`,
    144: `88`,
    145: `88`,
    146: `89`,
    147: `90`,
    148: `90`,
    149: `91`,
    15: `2`,
    150: `92`,
    151: `92`,
    152: `93`,
    153: `94`,
    154: `94`,
    155: `94`,
    156: `95`,
    157: `95`,
    158: `95`,
    159: `95`,
    16: `2`,
    160: `95`,
    161: `95`,
    162: `95`,
    163: `95`,
    164: `95`,
    165: `95`,
    166: `96`,
    167: `96`,
    168: `97`,
    169: `98`,
    17: `2`,
    170: `99`,
    171: `100`,
    172: `100`,
    173: `101`,
    174: `102`,
    175: `102`,
    176: `103`,
    177: `103`,
    178: `104`,
    179: `105`,
    18: `2`,
    180: `106`,
    181: `106`,
    182: `107`,
    183: `107`,
    184: `108`,
    185: `108`,
    186: `111`,
    187: `111`,
    188: `112`,
    189: `113`,
    19: `2`,
    190: `113`,
    191: `114`,
    192: `115`,
    193: `116`,
    194: `116`,
    195: `117`,
    196: `118`,
    197: `119`,
    198: `119`,
    199: `120`,
    2: `2`,
    20: `4`,
    200: `120`,
    201: `122`,
    202: `122`,
    203: `123`,
    204: `123`,
    205: `124`,
    206: `125`,
    207: `126`,
    208: `126`,
    209: `126`,
    21: `4`,
    210: `127`,
    211: `128`,
    212: `129`,
    213: `129`,
    214: `130`,
    215: `131`,
    216: `131`,
    217: `132`,
    218: `133`,
    219: `134`,
    22: `5`,
    220: `135`,
    221: `135`,
    222: `136`,
    223: `137`,
    224: `138`,
    225: `140`,
    226: `140`,
    227: `140`,
    228: `142`,
    229: `142`,
    23: `5`,
    230: `143`,
    231: `143`,
    232: `143`,
    233: `145`,
    234: `145`,
    235: `145`,
    236: `145`,
    237: `145`,
    238: `145`,
    239: `146`,
    24: `5`,
    240: `146`,
    241: `147`,
    242: `148`,
    243: `150`,
    244: `151`,
    245: `153`,
    246: `153`,
    247: `154`,
    248: `155`,
    249: `156`,
    25: `6`,
    250: `165`,
    251: `166`,
    252: `167`,
    253: `168`,
    254: `169`,
    255: `169`,
    256: `170`,
    257: `171`,
    258: `171`,
    259: `171`,
    26: `7`,
    260: `172`,
    261: `173`,
    262: `174`,
    263: `175`,
    264: `176`,
    265: `184`,
    266: `186`,
    267: `186`,
    268: `187`,
    269: `187`,
    27: `8`,
    270: `188`,
    271: `188`,
    272: `188`,
    273: `189`,
    274: `189`,
    275: `190`,
    276: `191`,
    277: `191`,
    278: `192`,
    279: `194`,
    28: `9`,
    280: `195`,
    281: `196`,
    282: `196`,
    283: `197`,
    284: `199`,
    285: `199`,
    286: `200`,
    287: `201`,
    288: `201`,
    289: `202`,
    29: `10`,
    290: `203`,
    291: `203`,
    292: `204`,
    293: `204`,
    294: `204`,
    295: `204`,
    296: `204`,
    297: `204`,
    298: `204`,
    299: `204`,
    3: `2`,
    30: `11`,
    300: `204`,
    301: `204`,
    302: `205`,
    303: `205`,
    304: `206`,
    305: `207`,
    306: `207`,
    307: `207`,
    308: `208`,
    309: `209`,
    31: `11`,
    310: `210`,
    311: `210`,
    312: `211`,
    313: `212`,
    314: `212`,
    315: `212`,
    316: `213`,
    317: `213`,
    318: `214`,
    319: `214`,
    32: `12`,
    320: `215`,
    321: `216`,
    322: `217`,
    323: `217`,
    324: `218`,
    325: `218`,
    326: `219`,
    327: `219`,
    328: `220`,
    329: `220`,
    33: `13`,
    330: `220`,
    331: `222`,
    332: `223`,
    333: `227`,
    334: `227`,
    335: `228`,
    336: `229`,
    337: `230`,
    338: `232`,
    339: `232`,
    34: `14`,
    340: `232`,
    341: `234`,
    342: `234`,
    343: `235`,
    344: `236`,
    345: `236`,
    346: `238`,
    347: `238`,
    348: `239`,
    349: `239`,
    35: `14`,
    350: `240`,
    351: `241`,
    352: `243`,
    353: `244`,
    354: `245`,
    355: `246`,
    356: `246`,
    357: `247`,
    358: `248`,
    359: `249`,
    36: `15`,
    360: `250`,
    361: `250`,
    362: `251`,
    363: `251`,
    364: `252`,
    365: `253`,
    366: `253`,
    367: `254`,
    368: `254`,
    369: `255`,
    37: `16`,
    370: `256`,
    371: `257`,
    372: `257`,
    373: `258`,
    374: `258`,
    375: `259`,
    376: `259`,
    377: `259`,
    378: `260`,
    379: `260`,
    38: `18`,
    380: `261`,
    381: `261`,
    382: `261`,
    383: `261`,
    384: `261`,
    385: `261`,
    386: `262`,
    387: `262`,
    388: `263`,
    389: `264`,
    39: `18`,
    390: `265`,
    391: `265`,
    392: `266`,
    393: `267`,
    394: `269`,
    395: `269`,
    396: `270`,
    397: `270`,
    398: `270`,
    399: `271`,
    4: `2`,
    40: `18`,
    400: `271`,
    401: `272`,
    402: `273`,
    403: `274`,
    404: `274`,
    405: `274`,
    406: `274`,
    407: `274`,
    408: `274`,
    409: `275`,
    41: `18`,
    410: `275`,
    411: `275`,
    412: `277`,
    413: `277`,
    414: `277`,
    415: `277`,
    416: `277`,
    417: `277`,
    418: `277`,
    419: `277`,
    42: `18`,
    420: `277`,
    421: `277`,
    422: `277`,
    423: `278`,
    424: `278`,
    425: `279`,
    426: `279`,
    427: `279`,
    428: `281`,
    429: `281`,
    43: `18`,
    430: `282`,
    431: `283`,
    432: `284`,
    433: `284`,
    434: `285`,
    435: `285`,
    436: `286`,
    437: `287`,
    438: `288`,
    439: `288`,
    44: `18`,
    440: `289`,
    441: `289`,
    442: `290`,
    443: `290`,
    444: `291`,
    445: `292`,
    446: `292`,
    447: `293`,
    448: `293`,
    449: `293`,
    45: `18`,
    450: `293`,
    451: `293`,
    452: `293`,
    453: `294`,
    454: `294`,
    455: `295`,
    456: `296`,
    457: `297`,
    458: `297`,
    459: `298`,
    46: `18`,
    460: `299`,
    461: `300`,
    462: `300`,
    463: `301`,
    464: `302`,
    465: `303`,
    466: `303`,
    467: `304`,
    468: `304`,
    469: `304`,
    47: `18`,
    470: `305`,
    471: `306`,
    472: `308`,
    473: `308`,
    474: `309`,
    475: `309`,
    476: `309`,
    477: `310`,
    478: `310`,
    479: `311`,
    48: `18`,
    480: `311`,
    481: `311`,
    482: `312`,
    483: `314`,
    484: `314`,
    485: `315`,
    486: `315`,
    487: `316`,
    488: `316`,
    489: `316`,
    49: `18`,
    490: `317`,
    491: `318`,
    492: `318`,
    493: `319`,
    494: `319`,
    495: `320`,
    496: `320`,
    497: `321`,
    498: `321`,
    499: `321`,
    5: `2`,
    50: `18`,
    500: `323`,
    501: `323`,
    502: `323`,
    503: `324`,
    504: `324`,
    505: `325`,
    506: `325`,
    507: `325`,
    508: `326`,
    509: `326`,
    51: `18`,
    510: `326`,
    511: `327`,
    512: `327`,
    513: `328`,
    514: `328`,
    515: `328`,
    516: `330`,
    517: `330`,
    518: `330`,
    519: `331`,
    52: `18`,
    520: `331`,
    521: `331`,
    522: `332`,
    523: `332`,
    524: `333`,
    525: `333`,
    526: `333`,
    527: `335`,
    528: `336`,
    529: `336`,
    53: `18`,
    530: `337`,
    531: `338`,
    532: `339`,
    533: `339`,
    534: `340`,
    535: `340`,
    536: `341`,
    537: `342`,
    538: `343`,
    539: `344`,
    54: `18`,
    540: `344`,
    541: `345`,
    542: `346`,
    543: `347`,
    544: `348`,
    545: `348`,
    546: `349`,
    547: `350`,
    548: `351`,
    549: `351`,
    55: `18`,
    550: `351`,
    551: `352`,
    552: `352`,
    553: `353`,
    554: `354`,
    555: `355`,
    556: `356`,
    557: `356`,
    558: `356`,
    559: `358`,
    56: `18`,
    560: `358`,
    561: `358`,
    562: `360`,
    563: `360`,
    564: `360`,
    565: `362`,
    566: `363`,
    567: `364`,
    568: `365`,
    569: `366`,
    57: `18`,
    570: `368`,
    571: `369`,
    572: `369`,
    573: `370`,
    574: `371`,
    575: `371`,
    576: `372`,
    577: `372`,
    578: `373`,
    579: `373`,
    58: `18`,
    580: `374`,
    581: `374`,
    582: `375`,
    583: `376`,
    584: `378`,
    585: `379`,
    586: `379`,
    587: `380`,
    588: `381`,
    589: `381`,
    59: `18`,
    590: `382`,
    591: `382`,
    592: `383`,
    593: `383`,
    594: `384`,
    595: `385`,
    596: `387`,
    597: `387`,
    598: `387`,
    599: `389`,
    6: `2`,
    60: `18`,
    600: `389`,
    601: `389`,
    602: `391`,
    603: `392`,
    604: `394`,
    605: `395`,
    606: `396`,
    607: `397`,
    608: `397`,
    609: `398`,
    61: `18`,
    610: `398`,
    611: `399`,
    612: `399`,
    613: `399`,
    614: `400`,
    615: `402`,
    616: `403`,
    617: `404`,
    618: `404`,
    619: `404`,
    62: `18`,
    620: `405`,
    621: `406`,
    622: `406`,
    623: `409`,
    624: `409`,
    625: `410`,
    626: `410`,
    627: `411`,
    628: `412`,
    629: `413`,
    63: `18`,
    630: `414`,
    631: `414`,
    632: `415`,
    633: `416`,
    634: `416`,
    635: `417`,
    636: `417`,
    637: `418`,
    638: `418`,
    639: `419`,
    64: `18`,
    640: `420`,
    641: `421`,
    642: `421`,
    643: `422`,
    644: `423`,
    645: `424`,
    646: `425`,
    647: `425`,
    648: `426`,
    649: `427`,
    65: `19`,
    650: `428`,
    651: `430`,
    652: `430`,
    653: `431`,
    654: `431`,
    655: `432`,
    656: `433`,
    657: `435`,
    658: `435`,
    659: `435`,
    66: `19`,
    660: `437`,
    661: `438`,
    662: `438`,
    663: `439`,
    664: `439`,
    665: `440`,
    666: `440`,
    667: `440`,
    668: `441`,
    669: `441`,
    67: `19`,
    670: `441`,
    671: `443`,
    672: `443`,
    673: `443`,
    674: `445`,
    675: `445`,
    676: `446`,
    677: `447`,
    678: `447`,
    679: `448`,
    68: `20`,
    680: `450`,
    681: `451`,
    682: `451`,
    683: `452`,
    684: `454`,
    685: `455`,
    686: `456`,
    687: `457`,
    688: `457`,
    689: `457`,
    69: `20`,
    690: `458`,
    691: `458`,
    692: `459`,
    693: `460`,
    694: `461`,
    695: `463`,
    696: `464`,
    697: `464`,
    698: `464`,
    699: `466`,
    7: `2`,
    70: `20`,
    700: `467`,
    701: `468`,
    702: `469`,
    703: `470`,
    704: `470`,
    705: `471`,
    706: `472`,
    707: `473`,
    708: `474`,
    709: `476`,
    71: `20`,
    710: `476`,
    711: `477`,
    712: `477`,
    713: `478`,
    714: `479`,
    715: `480`,
    716: `480`,
    717: `480`,
    718: `481`,
    719: `481`,
    72: `20`,
    720: `481`,
    721: `483`,
    722: `484`,
    723: `485`,
    724: `486`,
    725: `486`,
    726: `486`,
    727: `487`,
    728: `487`,
    729: `488`,
    73: `20`,
    730: `488`,
    731: `488`,
    732: `489`,
    733: `489`,
    734: `489`,
    735: `491`,
    736: `492`,
    737: `492`,
    738: `492`,
    739: `494`,
    74: `20`,
    740: `495`,
    741: `495`,
    742: `496`,
    75: `20`,
    76: `20`,
    77: `20`,
    78: `20`,
    79: `20`,
    8: `2`,
    80: `22`,
    81: `24`,
    82: `24`,
    83: `25`,
    84: `26`,
    85: `27`,
    86: `36`,
    87: `37`,
    88: `38`,
    89: `39`,
    9: `2`,
    90: `40`,
    91: `40`,
    92: `41`,
    93: `42`,
    94: `42`,
    95: `42`,
    96: `43`,
    97: `44`,
    98: `45`,
    99: `46`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 24,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T4","name":"v1365","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_deposit0_73","type":"bool"},{"internalType":"bool","name":"_wd0_73","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v757","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v872","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_deposit0_73","type":"bool"},{"internalType":"bool","name":"_wd0_73","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1368","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dead","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"wd","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620012dd9081380391601f1980601f85011683019360018060401b0392848610848711176200034f5781608092869260409889528339810103126200034a578351926200004e8462000365565b805184526020808201516001600160a01b039590919086831683036200034a578181019283528784015188820190815260608095015191858101928352436003556200009962000381565b5060049260ff845416620003335760a07f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb97918c51903382528451888301528d8d8a51169083015285518a830152516080820152a151801590811562000326575b50156200030f5734620002f857876200011162000381565b945116845251938284019485528884019360009485815243838301528a51968388018881108b821117620002e5578c528688528588019a878c528c8901938885525116809852518a5251815260038555600198438a558a519685880152518a87015251818601528452620001858462000365565b8351958611620002d257600254908782811c92168015620002c7575b83831014620002b45750601f811162000268575b508093601f86116001146200020057505091839491849394620001f4575b50501b916000199060031b1c1916176002555b51610f349081620003a98239f35b015192503880620001d3565b600283528183209493928692918316915b888383106200024d575050501062000233575b505050811b01600255620001e6565b015160001960f88460031b161c1916905538808062000224565b85870151885590960195948501948793509081019062000211565b60028352818320601f870160051c810191838810620002a9575b601f0160051c019087905b8281106200029d575050620001b5565b8481550187906200028d565b909150819062000282565b634e487b7160e01b845260229052602483fd5b91607f1691620001a1565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b885260418652602488fd5b885163100960cb60e01b8152600a81840152602490fd5b885163100960cb60e01b8152600981840152602490fd5b90506001541438620000f9565b8a5163100960cb60e01b8152600881860152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b038211176200034f57604052565b60405190620003908262000365565b6000606083828152826020820152826040820152015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f1146100bb5750806336cf7c87146100b257806336e56ea5146100a957806383230757146100a05780638edec68914610097578063ab53f2c61461008e578063d0e30db0146100855763f396fd8b0361000e576100806102cf565b61000e565b50610080610287565b50610080610215565b506100806101bb565b5061008061019c565b50610080610144565b506100806100da565b346100d757806003193601126100d75760035460805260206080f35b80fd5b503461010e57600036600319011261010e576100f46105ae565b5060405163100960cb60e01b815260076004820152602490fd5b600080fd5b6001600160a01b0381160361010e57565b6002111561012e57565b634e487b7160e01b600052602160045260246000fd5b503461010e57602036600319011261010e57606061017560043561016781610113565b61016f6104f2565b5061052b565b6040805191805161018581610124565b835260208101511515602084015201516040820152f35b503461010e57600036600319011261010e576020600154604051908152f35b50600036600319011261010e57602060606101d46105ae565b610209816101e0610ec8565b8581019060018251525115156040825101526101fa610ec8565b906000825251868201526106b8565b01511515604051908152f35b503461010e576000806003193601126100d7578054610232610447565b906040519283918252602090604082840152835191826040850152815b83811061027057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161024f565b50600036600319011261010e57602060406102a06105ae565b6102c5816102ac610ec8565b85810190600082515251151586825101526101fa610ec8565b0151604051908152f35b50608036600319011261010e576102e46105ae565b604051906102f1826103ab565b6004358252606036602319011261010e576040519161030f836103d3565b60243592600284101561010e5761034e93815260443561032e816105f1565b602082015260643561033f816105f1565b604082015260208201526106b8565b60405160008152602090f35b90600182811c9216801561038a575b602083101461037457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610369565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176103c657604052565b6103ce610394565b604052565b606081019081106001600160401b038211176103c657604052565b608081019081106001600160401b038211176103c657604052565b60a081019081106001600160401b038211176103c657604052565b601f909101601f19168101906001600160401b038211908210176103c657604052565b604051906000826002549161045b8361035a565b8083526001938085169081156104d15750600114610483575b5061048192500383610424565b565b60026000908152600080516020610f0883398151915294602093509091905b8183106104b9575050610481935082010138610474565b855488840185015294850194879450918301916104a2565b905061048194506020925060ff191682840152151560051b82010138610474565b604051906104ff826103d3565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b906105346104f2565b9160018060a01b03166000908082526005602052600160ff60408420541661055b81610124565b036105a3576040929350815260056020522060016040519161057c836103d3565b60ff815481811661058c81610124565b855260081c16151560208401520154604082015290565b508083526020830152565b60405190608082016001600160401b038111838210176105e4575b60405260006060838281528260208201528260408201520152565b6105ec610394565b6105c9565b8015150361010e57565b60405190602082016001600160401b0381118382101761061f575b60405260008252565b610627610394565b610616565b9081606091031261010e576040805191610645836103d3565b805161065081610113565b8352602081015160208401520151604082015290565b9092916040602060809260a085019660018060a01b031685528051828601520151805161069281610124565b8285015260208101511515606085015201511515910152565b516106b581610124565b90565b6106c06105fb565b906106cf600360005414610a06565b6106d7610447565b6106eb60209182808251830101910161062c565b926107076107026106fe60045460ff1690565b1590565b610a26565b816040937f17ec5e38ba31c24e430a6a804a7954ae08580921024aa52b2d69ed2100c2e7d085518061073a843383610666565b0390a161075281518015908115610995575b50610a46565b0161075d81516106ab565b61076681610124565b61087f575093610870916104819584860192610783845115610ae6565b6107a66107976107923361052b565b6106ab565b6107a081610124565b15610b06565b6107b03415610b26565b86516107d1906107cc906001600160a01b031630903390610cf0565b610b46565b85838801926107e18451436109db565b81526107fc6107ef33610511565b805460ff19166001179055565b8051600161080933610511565b0155805182519081527fe657428936671208b3a6d5b24e64b42466a4d77690a26949a3c506dfd2b898f790602090a15191015261086561085861084a6105ae565b97516001600160a01b031690565b6001600160a01b03168752565b5190850152516109b8565b90820152436060820152610d91565b6001915061088d90516106ab565b61089681610124565b146108a2575b50505050565b61098c93610870916109696060858701936108c06001865114610a66565b6108e060016108d16107923361052b565b6108da81610124565b14610a86565b6108ea3415610aa6565b875161090890610903906001600160a01b031633610c95565b610ac6565b875161091e9033906001600160a01b0316610b66565b61093661092a33610511565b60016000918281550155565b8651600181527fceda1ea86efecdc1bac729f19bb4cc645703d5bae7184b1ac50c555ea44d7fcd90602090a10160019052565b806109726105ae565b86516001600160a01b0316815295015190850152516109ef565b3880808061089c565b9050600154143861074c565b50634e487b7160e01b600052601160045260246000fd5b9060018201918281116109ce575b821061010e57565b6109d66109a1565b6109c6565b91908201918281116109ce57821061010e57565b60001981019081116109fe5790565b6106b56109a1565b15610a0d57565b60405163100960cb60e01b8152600b6004820152602490fd5b15610a2d57565b60405163100960cb60e01b8152600c6004820152602490fd5b15610a4d57565b60405163100960cb60e01b8152600d6004820152602490fd5b15610a6d57565b60405163100960cb60e01b815260126004820152602490fd5b15610a8d57565b60405163100960cb60e01b815260136004820152602490fd5b15610aad57565b60405163100960cb60e01b815260146004820152602490fd5b15610acd57565b60405163100960cb60e01b815260156004820152602490fd5b15610aed57565b60405163100960cb60e01b8152600e6004820152602490fd5b15610b0d57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610b2d57565b60405163100960cb60e01b815260106004820152602490fd5b15610b4d57565b60405163100960cb60e01b815260116004820152602490fd5b60008091610bcc938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526001604482015260448152610ba5816103ee565b5193165af1610bbc610bb5610bd3565b8092610c35565b5060208082518301019101610c20565b1561010e57565b3d15610c1b573d906001600160401b038211610c0e575b60405191610c02601f8201601f191660200184610424565b82523d6000602084013e565b610c16610394565b610bea565b606090565b9081602091031261010e57516106b5816105f1565b15610c3d5790565b805115610c4c57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15610c6d5790565b805115610c7c57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60006106b5928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152610cd981610409565b5193165af1610bbc610ce9610bd3565b8092610c65565b6040516323b872dd60e01b602082019081526001600160a01b0393841660248301529383166044820152600160648083019190915281526106b593600093849392849190610cd981610409565b601f8111610d49575050565b6000906002825260208220906020601f850160051c83019410610d87575b601f0160051c01915b828110610d7c57505050565b818155600101610d70565b9092508290610d67565b610d996104f2565b60018060a01b03825116908181526020906040808386015195848401968752015191019081526003600055600193438555604051938385015251604084015251606083015260608252610deb826103ee565b8151916001600160401b038311610ebb575b610e1183610e0c60025461035a565b610d3d565b81601f8411600114610e4b5750928293918392600094610e40575b50501b916000199060031b1c191617600255565b015192503880610e2c565b6002600052919083601f198116600080516020610f08833981519152946000905b88838310610ea15750505010610e88575b505050811b01600255565b015160001960f88460031b161c19169055388080610e7d565b858701518855909601959485019487935090810190610e6c565b610ec3610394565b610dfd565b60408051919082016001600160401b03811183821017610efa575b60405281600081526020610ef56104f2565b910152565b610f02610394565b610ee356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 4829,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:36:35:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "deposit": deposit,
  "wd": wd
  };
export const _APIs = {
  deposit: deposit,
  wd: wd
  };
