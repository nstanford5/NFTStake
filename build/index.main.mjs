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
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  
  const _dead = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v627, v628, v629, v638, v639, v640, v641, v669] = svs;
      return (await ((async () => {
        
        
        return v669;}))(...args));
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
      3: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1]
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
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    deposit0_86: ctc6,
    wd0_86: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v617 = stdlib.protect(ctc4, interact.params, 'for Admin\'s interact field params');
  const v618 = v617.deadline;
  const v619 = v617.rewards;
  const v620 = v617.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v620, v618, v619],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v627, v628, v629], secs: v631, time: v630, didSend: v35, from: v626 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v627
        });
      ;
      const v636 = await ctc.getContractInfo();
      
      const v638 = stdlib.checkedBigNumberify('./index.rsh:32:55:decimal', stdlib.UInt_max, '0');
      const v639 = v629;
      const v640 = stdlib.checkedBigNumberify('./index.rsh:32:67:decimal', stdlib.UInt_max, '0');
      const v641 = v626;
      const v642 = v630;
      
      if (await (async () => {
        
        return true;})()) {
        const v668 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc5, v641, ctc1), null);
        const v669 = stdlib.fromSome(v668, stdlib.checkedBigNumberify('./index.rsh:34:37:decimal', stdlib.UInt_max, '0'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v627
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
  const {data: [v627, v628, v629], secs: v631, time: v630, didSend: v35, from: v626 } = txn1;
  ;
  ;
  const v636 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v636), {
    at: './index.rsh:28:22:application',
    fs: ['at ./index.rsh:28:22:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)', 'at ./index.rsh:28:22:application call to "liftedInteract" (defined at: ./index.rsh:28:22:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v638 = stdlib.checkedBigNumberify('./index.rsh:32:55:decimal', stdlib.UInt_max, '0');
  let v639 = v629;
  let v640 = stdlib.checkedBigNumberify('./index.rsh:32:67:decimal', stdlib.UInt_max, '0');
  let v641 = v626;
  let v642 = v630;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const v668 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v641, ctc1), null);
    const v669 = stdlib.fromSome(v668, stdlib.checkedBigNumberify('./index.rsh:34:37:decimal', stdlib.UInt_max, '0'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v731], secs: v733, time: v732, didSend: v471, from: v730 } = txn3;
    switch (v731[0]) {
      case 'deposit0_86': {
        const v734 = v731[1];
        undefined /* setApiDetails */;
        const v739 = stdlib.eq(v638, stdlib.checkedBigNumberify('./index.rsh:46:24:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v739, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'sorry, this contract is already occupied',
          who: 'Admin'
          });
        const v741 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v730, ctc1), null);
        const v742 = {
          None: 0,
          Some: 1
          }[v741[0]];
        const v743 = stdlib.eq(v742, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v743, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:47:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'you are already here',
          who: 'Admin'
          });
        ;
        ;
        const v787 = stdlib.safeAdd(v732, v628);
        await stdlib.mapSet(map0, ctc5, v730, ctc1, v787);
        await txn3.getOutput('deposit', 'v787', ctc1, v787);
        const v793 = stdlib.safeAdd(v638, stdlib.checkedBigNumberify('./index.rsh:54:26:decimal', stdlib.UInt_max, '1'));
        const cv638 = v793;
        const cv639 = v639;
        const cv640 = v640;
        const cv641 = v730;
        const cv642 = v732;
        
        v638 = cv638;
        v639 = cv639;
        v640 = cv640;
        v641 = cv641;
        v642 = cv642;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'wd0_86': {
        const v824 = v731[1];
        undefined /* setApiDetails */;
        const v842 = stdlib.eq(v638, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v842, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:58:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'No assets here to withdraw',
          who: 'Admin'
          });
        const v844 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v730, ctc1), null);
        const v845 = {
          None: 0,
          Some: 1
          }[v844[0]];
        const v846 = stdlib.eq(v845, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v846, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:59:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
          msg: 'this function is not for you',
          who: 'Admin'
          });
        ;
        ;
        ;
        await stdlib.mapSet(map0, ctc5, v730, ctc1, undefined /* Nothing */);
        const v904 = true;
        await txn3.getOutput('wd', 'v904', ctc8, v904);
        const v910 = stdlib.safeSub(v638, stdlib.checkedBigNumberify('./index.rsh:78:28:decimal', stdlib.UInt_max, '1'));
        const v911 = stdlib.safeSub(v639, v629);
        const v912 = stdlib.safeAdd(v640, v629);
        const cv638 = v910;
        const cv639 = v911;
        const cv640 = v912;
        const cv641 = v641;
        const cv642 = v732;
        
        v638 = cv638;
        v639 = cv639;
        v640 = cv640;
        v641 = cv641;
        v642 = cv642;
        
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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    deposit0_86: ctc5,
    wd0_86: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v627, v628, v629, v638, v639, v640, v641, v669] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1]);
  const v670 = ctc.selfAddress();
  const v672 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to "rundeposit0_86" (defined at: ./index.rsh:45:10:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v673 = stdlib.eq(v638, stdlib.checkedBigNumberify('./index.rsh:46:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v673, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to "rundeposit0_86" (defined at: ./index.rsh:45:10:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)'],
    msg: 'sorry, this contract is already occupied',
    who: 'deposit'
    });
  const v675 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v670, ctc1), null);
  const v676 = {
    None: 0,
    Some: 1
    }[v675[0]];
  const v677 = stdlib.eq(v676, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v677, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to "rundeposit0_86" (defined at: ./index.rsh:45:10:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)'],
    msg: 'you are already here',
    who: 'deposit'
    });
  const v682 = ['deposit0_86', v672];
  
  const txn1 = await (ctc.sendrecv({
    args: [v627, v628, v629, v638, v639, v640, v641, v669, v682],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:25:15:decimal', stdlib.UInt_max, '1'), v627]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v731], secs: v733, time: v732, didSend: v471, from: v730 } = txn1;
      
      switch (v731[0]) {
        case 'deposit0_86': {
          const v734 = v731[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v730, ctc1), null);
          ;
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v627
            });
          const v787 = stdlib.safeAdd(v732, v628);
          await stdlib.simMapSet(sim_r, 0, ctc4, v730, ctc1, v787);
          const v788 = await txn1.getOutput('deposit', 'v787', ctc1, v787);
          
          const v793 = stdlib.safeAdd(v638, stdlib.checkedBigNumberify('./index.rsh:54:26:decimal', stdlib.UInt_max, '1'));
          const v1494 = v793;
          const v1495 = v639;
          const v1496 = v640;
          const v1497 = v730;
          const v1500 = v787;
          sim_r.isHalt = false;
          
          break;
          }
        case 'wd0_86': {
          const v824 = v731[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v731], secs: v733, time: v732, didSend: v471, from: v730 } = txn1;
  switch (v731[0]) {
    case 'deposit0_86': {
      const v734 = v731[1];
      undefined /* setApiDetails */;
      const v739 = stdlib.eq(v638, stdlib.checkedBigNumberify('./index.rsh:46:24:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v739, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'sorry, this contract is already occupied',
        who: 'deposit'
        });
      const v741 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v730, ctc1), null);
      const v742 = {
        None: 0,
        Some: 1
        }[v741[0]];
      const v743 = stdlib.eq(v742, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v743, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:47:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:25:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'you are already here',
        who: 'deposit'
        });
      ;
      ;
      const v787 = stdlib.safeAdd(v732, v628);
      await stdlib.mapSet(map0, ctc4, v730, ctc1, v787);
      const v788 = await txn1.getOutput('deposit', 'v787', ctc1, v787);
      if (v471) {
        stdlib.protect(ctc0, await interact.out(v734, v788), {
          at: './index.rsh:45:11:application',
          fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:11:function exp)', 'at ./index.rsh:52:12:application call to "ret" (defined at: ./index.rsh:48:37:function exp)', 'at ./index.rsh:48:37:application call to [unknown function] (defined at: ./index.rsh:48:37:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v793 = stdlib.safeAdd(v638, stdlib.checkedBigNumberify('./index.rsh:54:26:decimal', stdlib.UInt_max, '1'));
      const v1494 = v793;
      const v1495 = v639;
      const v1496 = v640;
      const v1497 = v730;
      const v1500 = v787;
      return;
      
      break;
      }
    case 'wd0_86': {
      const v824 = v731[1];
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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    deposit0_86: ctc5,
    wd0_86: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v627, v628, v629, v638, v639, v640, v641, v669] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1]);
  const v684 = ctc.selfAddress();
  const v686 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to "runwd0_86" (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)'],
    msg: 'in',
    who: 'wd'
    });
  const v687 = stdlib.eq(v638, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v687, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to "runwd0_86" (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)'],
    msg: 'No assets here to withdraw',
    who: 'wd'
    });
  const v689 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v684, ctc1), null);
  const v690 = {
    None: 0,
    Some: 1
    }[v689[0]];
  const v691 = stdlib.eq(v690, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v691, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to "runwd0_86" (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)'],
    msg: 'this function is not for you',
    who: 'wd'
    });
  const v696 = ['wd0_86', v686];
  
  const txn1 = await (ctc.sendrecv({
    args: [v627, v628, v629, v638, v639, v640, v641, v669, v696],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '0'), v627]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v731], secs: v733, time: v732, didSend: v471, from: v730 } = txn1;
      
      switch (v731[0]) {
        case 'deposit0_86': {
          const v734 = v731[1];
          
          break;
          }
        case 'wd0_86': {
          const v824 = v731[1];
          sim_r.txns.push({
            kind: 'api',
            who: "wd"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v730, ctc1), null);
          ;
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v730,
            tok: v627
            });
          await stdlib.simMapSet(sim_r, 0, ctc4, v730, ctc1, undefined /* Nothing */);
          const v904 = true;
          const v905 = await txn1.getOutput('wd', 'v904', ctc7, v904);
          
          const v910 = stdlib.safeSub(v638, stdlib.checkedBigNumberify('./index.rsh:78:28:decimal', stdlib.UInt_max, '1'));
          const v911 = stdlib.safeSub(v639, v629);
          const v912 = stdlib.safeAdd(v640, v629);
          const v1521 = v910;
          const v1522 = v911;
          const v1523 = v912;
          const v1524 = v641;
          const v1526 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v641, ctc1), null);
          const v1527 = stdlib.fromSome(v1526, stdlib.checkedBigNumberify('./index.rsh:34:37:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v731], secs: v733, time: v732, didSend: v471, from: v730 } = txn1;
  switch (v731[0]) {
    case 'deposit0_86': {
      const v734 = v731[1];
      return;
      break;
      }
    case 'wd0_86': {
      const v824 = v731[1];
      undefined /* setApiDetails */;
      const v842 = stdlib.eq(v638, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v842, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:58:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'No assets here to withdraw',
        who: 'wd'
        });
      const v844 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v730, ctc1), null);
      const v845 = {
        None: 0,
        Some: 1
        }[v844[0]];
      const v846 = stdlib.eq(v845, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v846, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:59:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)', 'at ./index.rsh:32:53:application call to [unknown function] (defined at: ./index.rsh:32:53:function exp)', 'at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)'],
        msg: 'this function is not for you',
        who: 'wd'
        });
      ;
      ;
      ;
      await stdlib.mapSet(map0, ctc4, v730, ctc1, undefined /* Nothing */);
      const v904 = true;
      const v905 = await txn1.getOutput('wd', 'v904', ctc7, v904);
      if (v471) {
        stdlib.protect(ctc0, await interact.out(v824, v905), {
          at: './index.rsh:57:11:application',
          fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:11:function exp)', 'at ./index.rsh:77:14:application call to "ret" (defined at: ./index.rsh:61:35:function exp)', 'at ./index.rsh:61:35:application call to [unknown function] (defined at: ./index.rsh:61:35:function exp)'],
          msg: 'out',
          who: 'wd'
          });
        }
      else {
        }
      
      const v910 = stdlib.safeSub(v638, stdlib.checkedBigNumberify('./index.rsh:78:28:decimal', stdlib.UInt_max, '1'));
      const v911 = stdlib.safeSub(v639, v629);
      const v912 = stdlib.safeAdd(v640, v629);
      const v1521 = v910;
      const v1522 = v911;
      const v1523 = v912;
      const v1524 = v641;
      const v1526 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v641, ctc1), null);
      const v1527 = stdlib.fromSome(v1526, stdlib.checkedBigNumberify('./index.rsh:34:37:decimal', stdlib.UInt_max, '0'));
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
  appApproval: `CCAJAAEIAwTUkwEQGKCNBiYCAQAAMRhBAkApZEkiWzUBJFs1AihkggUEA6+jPARNxJJxBH7VyiwEuIQ1aAS6zETmNhoAjgUB7gIpAf4CLAKaADQSIhJEKSSvKDEAUIgCjSJVIhJEIzQVMRY0ACMISTUACUcDOBQyChJEOBAhBBJEOBFPAhJEOBISRDIGNBQINQshBSgxAFA0CxaIAq2ACAAAAAAAAAMTNAsWULA0CxY1BDQSIwgxADIGNQ41DzUSJK8pJK8oNA9QiAIiSVcBAEwiVU0XNQw0FRY0FBZQNBMWUDQSFlA0ERZQNBAWUDQPUDQMFlAlMgY1AjUBKExXAFhnKTQBFjQCFlBnMRkiEkSIAiw0A0AACoAEFR98dTQEULAjQzQSIxJEKSSvKDEAUIgBuyJVIxJEIzQVMQCIAcMhBSgxAFC8Ik4CTTQHCDUHIzULgAgAAAAAAAADiDQLFlEHCFCwNAsWUQcINQQ0EiMJNBE0Ewk0EDQTCDIGNQ41EDURNRJC/zg0ASUSRIgBgTQMFjUEMRkiEkRC/3uBCa81CyU0ARJEiAFnNAsiWzUMNAtXCAE1DYAE1d4GwTQMFlA0DVCwNAyIAT00DSJVjQIAzADPQv56gAkAAAAAAAAAAAE1C0L/uzQLIls1DDQLJFs1FTQLIQZbNRQ0CyEHWzUTgAT27avSNAwWUDQVFlA0FBZQNBMWULA0DIgA6iEIiADXIjQVMgqIANkiNBMiMQAyBjUONQ81EDURNRJC/oGIAL0hCIgAsjYaATULQv+YiACtNhoBNQtC/0giMTQSRIECMTUSRCIxNhJEIjE3EkSIAI2BWK8iIkL+fkL/C0L/HUhMv0iJIrIBIQSyELIUshGyErOJIrIBI7IQsgeyCLOJQv2vQv5+SIlMCUk1BjIJiACniQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiTEZgQUSRIgAXyIyCjIJiAB1Qv4oQv7pvkkWUQcIRQRNUIk0Bgg1BokjNQOJsUL/fkkiEkw0AhIRRIlJIls1FUkkWzUUSSEGWzUTSSEHWzUSSYEgWzURSYEoWzUQSVcwIDUPgVBbNQyJNAY0B0oPQf9gQv9oTEm9QP8vSwOI/6NC/yexQv83sbIJQv8x`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `46`,
    101: `47`,
    102: `55`,
    103: `56`,
    104: `56`,
    105: `59`,
    106: `59`,
    107: `60`,
    108: `60`,
    109: `61`,
    11: `2`,
    110: `62`,
    111: `63`,
    112: `64`,
    113: `64`,
    114: `65`,
    115: `66`,
    116: `66`,
    117: `67`,
    118: `67`,
    119: `68`,
    12: `2`,
    120: `68`,
    121: `69`,
    122: `70`,
    123: `71`,
    124: `71`,
    125: `72`,
    126: `72`,
    127: `73`,
    128: `74`,
    129: `75`,
    13: `2`,
    130: `75`,
    131: `76`,
    132: `76`,
    133: `77`,
    134: `78`,
    135: `79`,
    136: `79`,
    137: `80`,
    138: `81`,
    139: `84`,
    14: `2`,
    140: `84`,
    141: `85`,
    142: `85`,
    143: `86`,
    144: `87`,
    145: `87`,
    146: `88`,
    147: `88`,
    148: `89`,
    149: `90`,
    15: `2`,
    150: `90`,
    151: `91`,
    152: `92`,
    153: `92`,
    154: `93`,
    155: `94`,
    156: `94`,
    157: `94`,
    158: `95`,
    159: `95`,
    16: `2`,
    160: `95`,
    161: `95`,
    162: `95`,
    163: `95`,
    164: `95`,
    165: `95`,
    166: `95`,
    167: `95`,
    168: `96`,
    169: `96`,
    17: `2`,
    170: `97`,
    171: `98`,
    172: `99`,
    173: `100`,
    174: `100`,
    175: `101`,
    176: `102`,
    177: `102`,
    178: `103`,
    179: `103`,
    18: `2`,
    180: `104`,
    181: `105`,
    182: `106`,
    183: `106`,
    184: `107`,
    185: `107`,
    186: `108`,
    187: `108`,
    188: `109`,
    189: `109`,
    19: `2`,
    190: `110`,
    191: `110`,
    192: `112`,
    193: `113`,
    194: `115`,
    195: `116`,
    196: `117`,
    197: `118`,
    198: `119`,
    199: `119`,
    2: `2`,
    20: `2`,
    200: `120`,
    201: `121`,
    202: `121`,
    203: `121`,
    204: `123`,
    205: `124`,
    206: `124`,
    207: `124`,
    208: `125`,
    209: `126`,
    21: `4`,
    210: `127`,
    211: `128`,
    212: `129`,
    213: `130`,
    214: `130`,
    215: `132`,
    216: `132`,
    217: `133`,
    218: `134`,
    219: `134`,
    22: `4`,
    220: `135`,
    221: `136`,
    222: `137`,
    223: `137`,
    224: `138`,
    225: `139`,
    226: `140`,
    227: `140`,
    228: `141`,
    229: `142`,
    23: `5`,
    230: `143`,
    231: `143`,
    232: `144`,
    233: `145`,
    234: `146`,
    235: `146`,
    236: `147`,
    237: `148`,
    238: `149`,
    239: `149`,
    24: `5`,
    240: `150`,
    241: `151`,
    242: `151`,
    243: `152`,
    244: `153`,
    245: `154`,
    246: `155`,
    247: `155`,
    248: `157`,
    249: `157`,
    25: `5`,
    250: `158`,
    251: `158`,
    252: `159`,
    253: `160`,
    254: `161`,
    255: `161`,
    256: `161`,
    257: `162`,
    258: `163`,
    259: `164`,
    26: `6`,
    260: `164`,
    261: `165`,
    262: `166`,
    263: `166`,
    264: `167`,
    265: `168`,
    266: `169`,
    267: `170`,
    268: `170`,
    269: `171`,
    27: `7`,
    270: `172`,
    271: `173`,
    272: `175`,
    273: `175`,
    274: `175`,
    275: `177`,
    276: `177`,
    277: `178`,
    278: `178`,
    279: `178`,
    28: `8`,
    280: `180`,
    281: `180`,
    282: `180`,
    283: `180`,
    284: `180`,
    285: `180`,
    286: `181`,
    287: `181`,
    288: `182`,
    289: `183`,
    29: `9`,
    290: `185`,
    291: `186`,
    292: `188`,
    293: `188`,
    294: `189`,
    295: `190`,
    296: `191`,
    297: `200`,
    298: `201`,
    299: `202`,
    3: `2`,
    30: `10`,
    300: `203`,
    301: `204`,
    302: `204`,
    303: `205`,
    304: `206`,
    305: `206`,
    306: `206`,
    307: `207`,
    308: `208`,
    309: `209`,
    31: `11`,
    310: `210`,
    311: `211`,
    312: `219`,
    313: `221`,
    314: `221`,
    315: `222`,
    316: `222`,
    317: `223`,
    318: `223`,
    319: `223`,
    32: `11`,
    320: `224`,
    321: `224`,
    322: `225`,
    323: `226`,
    324: `226`,
    325: `227`,
    326: `229`,
    327: `230`,
    328: `231`,
    329: `231`,
    33: `12`,
    330: `232`,
    331: `234`,
    332: `234`,
    333: `235`,
    334: `236`,
    335: `236`,
    336: `237`,
    337: `238`,
    338: `238`,
    339: `239`,
    34: `13`,
    340: `239`,
    341: `239`,
    342: `239`,
    343: `239`,
    344: `239`,
    345: `239`,
    346: `239`,
    347: `239`,
    348: `239`,
    349: `240`,
    35: `14`,
    350: `240`,
    351: `241`,
    352: `242`,
    353: `242`,
    354: `242`,
    355: `243`,
    356: `244`,
    357: `245`,
    358: `245`,
    359: `246`,
    36: `14`,
    360: `247`,
    361: `247`,
    362: `247`,
    363: `248`,
    364: `248`,
    365: `249`,
    366: `249`,
    367: `250`,
    368: `251`,
    369: `252`,
    37: `15`,
    370: `252`,
    371: `253`,
    372: `253`,
    373: `254`,
    374: `255`,
    375: `255`,
    376: `256`,
    377: `256`,
    378: `257`,
    379: `258`,
    38: `16`,
    380: `258`,
    381: `259`,
    382: `259`,
    383: `260`,
    384: `260`,
    385: `261`,
    386: `261`,
    387: `262`,
    388: `262`,
    389: `263`,
    39: `18`,
    390: `263`,
    391: `263`,
    392: `265`,
    393: `265`,
    394: `266`,
    395: `267`,
    396: `268`,
    397: `271`,
    398: `271`,
    399: `271`,
    4: `2`,
    40: `18`,
    400: `272`,
    401: `272`,
    402: `273`,
    403: `274`,
    404: `274`,
    405: `276`,
    406: `276`,
    407: `277`,
    408: `278`,
    409: `279`,
    41: `18`,
    410: `281`,
    411: `281`,
    412: `281`,
    413: `283`,
    414: `283`,
    415: `284`,
    416: `285`,
    417: `285`,
    418: `287`,
    419: `288`,
    42: `18`,
    420: `288`,
    421: `289`,
    422: `290`,
    423: `291`,
    424: `291`,
    425: `291`,
    426: `292`,
    427: `292`,
    428: `293`,
    429: `294`,
    43: `18`,
    430: `295`,
    431: `295`,
    432: `296`,
    433: `296`,
    434: `297`,
    435: `297`,
    436: `297`,
    437: `298`,
    438: `298`,
    439: `299`,
    44: `18`,
    440: `299`,
    441: `299`,
    442: `299`,
    443: `299`,
    444: `299`,
    445: `300`,
    446: `300`,
    447: `301`,
    448: `302`,
    449: `303`,
    45: `18`,
    450: `303`,
    451: `304`,
    452: `305`,
    453: `307`,
    454: `307`,
    455: `308`,
    456: `308`,
    457: `308`,
    458: `309`,
    459: `309`,
    46: `18`,
    460: `310`,
    461: `311`,
    462: `312`,
    463: `312`,
    464: `312`,
    465: `312`,
    466: `312`,
    467: `312`,
    468: `313`,
    469: `313`,
    47: `18`,
    470: `313`,
    471: `315`,
    472: `315`,
    473: `315`,
    474: `315`,
    475: `315`,
    476: `315`,
    477: `315`,
    478: `315`,
    479: `315`,
    48: `18`,
    480: `315`,
    481: `315`,
    482: `316`,
    483: `316`,
    484: `317`,
    485: `317`,
    486: `317`,
    487: `319`,
    488: `319`,
    489: `320`,
    49: `18`,
    490: `321`,
    491: `322`,
    492: `322`,
    493: `323`,
    494: `323`,
    495: `324`,
    496: `325`,
    497: `326`,
    498: `326`,
    499: `327`,
    5: `2`,
    50: `18`,
    500: `327`,
    501: `328`,
    502: `328`,
    503: `329`,
    504: `330`,
    505: `330`,
    506: `331`,
    507: `331`,
    508: `332`,
    509: `332`,
    51: `18`,
    510: `333`,
    511: `334`,
    512: `334`,
    513: `335`,
    514: `335`,
    515: `335`,
    516: `335`,
    517: `335`,
    518: `335`,
    519: `336`,
    52: `18`,
    520: `336`,
    521: `337`,
    522: `338`,
    523: `339`,
    524: `339`,
    525: `340`,
    526: `341`,
    527: `342`,
    528: `342`,
    529: `343`,
    53: `18`,
    530: `344`,
    531: `345`,
    532: `345`,
    533: `346`,
    534: `347`,
    535: `348`,
    536: `350`,
    537: `350`,
    538: `351`,
    539: `351`,
    54: `18`,
    540: `351`,
    541: `352`,
    542: `352`,
    543: `353`,
    544: `353`,
    545: `353`,
    546: `354`,
    547: `356`,
    548: `356`,
    549: `357`,
    55: `18`,
    550: `357`,
    551: `358`,
    552: `358`,
    553: `358`,
    554: `359`,
    555: `360`,
    556: `360`,
    557: `361`,
    558: `362`,
    559: `362`,
    56: `18`,
    560: `363`,
    561: `363`,
    562: `364`,
    563: `364`,
    564: `365`,
    565: `365`,
    566: `366`,
    567: `366`,
    568: `367`,
    569: `367`,
    57: `18`,
    570: `368`,
    571: `368`,
    572: `369`,
    573: `369`,
    574: `369`,
    575: `371`,
    576: `371`,
    577: `371`,
    578: `372`,
    579: `372`,
    58: `18`,
    580: `373`,
    581: `373`,
    582: `373`,
    583: `374`,
    584: `374`,
    585: `374`,
    586: `375`,
    587: `375`,
    588: `376`,
    589: `376`,
    59: `18`,
    590: `376`,
    591: `378`,
    592: `378`,
    593: `378`,
    594: `379`,
    595: `379`,
    596: `379`,
    597: `380`,
    598: `380`,
    599: `381`,
    6: `2`,
    60: `18`,
    600: `381`,
    601: `381`,
    602: `383`,
    603: `384`,
    604: `384`,
    605: `385`,
    606: `386`,
    607: `387`,
    608: `387`,
    609: `388`,
    61: `18`,
    610: `388`,
    611: `389`,
    612: `390`,
    613: `391`,
    614: `392`,
    615: `392`,
    616: `393`,
    617: `394`,
    618: `395`,
    619: `396`,
    62: `18`,
    620: `396`,
    621: `397`,
    622: `398`,
    623: `399`,
    624: `399`,
    625: `399`,
    626: `400`,
    627: `400`,
    628: `401`,
    629: `402`,
    63: `18`,
    630: `403`,
    631: `404`,
    632: `404`,
    633: `404`,
    634: `406`,
    635: `406`,
    636: `406`,
    637: `408`,
    638: `408`,
    639: `408`,
    64: `18`,
    640: `410`,
    641: `411`,
    642: `412`,
    643: `413`,
    644: `414`,
    645: `416`,
    646: `417`,
    647: `417`,
    648: `418`,
    649: `418`,
    65: `18`,
    650: `419`,
    651: `419`,
    652: `420`,
    653: `420`,
    654: `421`,
    655: `421`,
    656: `422`,
    657: `422`,
    658: `423`,
    659: `424`,
    66: `19`,
    660: `426`,
    661: `427`,
    662: `427`,
    663: `428`,
    664: `429`,
    665: `429`,
    666: `430`,
    667: `430`,
    668: `431`,
    669: `431`,
    67: `19`,
    670: `432`,
    671: `433`,
    672: `435`,
    673: `435`,
    674: `435`,
    675: `437`,
    676: `437`,
    677: `437`,
    678: `439`,
    679: `440`,
    68: `19`,
    680: `442`,
    681: `443`,
    682: `444`,
    683: `445`,
    684: `445`,
    685: `446`,
    686: `446`,
    687: `447`,
    688: `447`,
    689: `447`,
    69: `20`,
    690: `448`,
    691: `450`,
    692: `451`,
    693: `452`,
    694: `452`,
    695: `452`,
    696: `453`,
    697: `454`,
    698: `454`,
    699: `457`,
    7: `2`,
    70: `20`,
    700: `457`,
    701: `458`,
    702: `458`,
    703: `459`,
    704: `460`,
    705: `461`,
    706: `462`,
    707: `462`,
    708: `463`,
    709: `464`,
    71: `20`,
    710: `464`,
    711: `465`,
    712: `465`,
    713: `466`,
    714: `466`,
    715: `467`,
    716: `468`,
    717: `469`,
    718: `469`,
    719: `470`,
    72: `20`,
    720: `471`,
    721: `472`,
    722: `473`,
    723: `473`,
    724: `474`,
    725: `475`,
    726: `476`,
    727: `478`,
    728: `478`,
    729: `479`,
    73: `20`,
    730: `479`,
    731: `480`,
    732: `481`,
    733: `483`,
    734: `483`,
    735: `483`,
    736: `485`,
    737: `486`,
    738: `486`,
    739: `487`,
    74: `20`,
    740: `487`,
    741: `488`,
    742: `488`,
    743: `488`,
    744: `489`,
    745: `489`,
    746: `489`,
    747: `491`,
    748: `491`,
    749: `491`,
    75: `20`,
    750: `493`,
    751: `494`,
    752: `495`,
    753: `496`,
    754: `496`,
    755: `496`,
    756: `497`,
    757: `497`,
    758: `498`,
    759: `499`,
    76: `20`,
    760: `500`,
    761: `502`,
    762: `502`,
    763: `503`,
    764: `504`,
    765: `504`,
    766: `505`,
    767: `507`,
    768: `508`,
    769: `508`,
    77: `20`,
    770: `509`,
    771: `511`,
    772: `512`,
    773: `512`,
    774: `512`,
    775: `514`,
    776: `515`,
    777: `516`,
    778: `517`,
    779: `518`,
    78: `20`,
    780: `518`,
    781: `519`,
    782: `520`,
    783: `521`,
    784: `522`,
    785: `524`,
    786: `525`,
    787: `526`,
    788: `527`,
    789: `527`,
    79: `20`,
    790: `528`,
    791: `529`,
    792: `530`,
    793: `531`,
    794: `531`,
    795: `532`,
    796: `533`,
    797: `533`,
    798: `534`,
    799: `535`,
    8: `2`,
    80: `20`,
    800: `535`,
    801: `536`,
    802: `537`,
    803: `537`,
    804: `538`,
    805: `539`,
    806: `539`,
    807: `540`,
    808: `541`,
    809: `541`,
    81: `22`,
    810: `542`,
    811: `543`,
    812: `543`,
    813: `544`,
    814: `545`,
    815: `545`,
    816: `546`,
    817: `547`,
    818: `547`,
    819: `548`,
    82: `24`,
    820: `549`,
    821: `549`,
    822: `549`,
    823: `550`,
    824: `550`,
    825: `551`,
    826: `551`,
    827: `552`,
    828: `553`,
    829: `553`,
    83: `24`,
    830: `554`,
    831: `556`,
    832: `556`,
    833: `557`,
    834: `557`,
    835: `558`,
    836: `559`,
    837: `560`,
    838: `560`,
    839: `560`,
    84: `25`,
    840: `561`,
    841: `561`,
    842: `561`,
    843: `563`,
    844: `564`,
    845: `565`,
    846: `566`,
    847: `566`,
    848: `566`,
    849: `567`,
    85: `26`,
    850: `567`,
    851: `568`,
    852: `568`,
    853: `568`,
    854: `569`,
    855: `569`,
    856: `569`,
    857: `571`,
    858: `572`,
    859: `572`,
    86: `27`,
    860: `572`,
    861: `574`,
    862: `575`,
    863: `575`,
    864: `576`,
    87: `36`,
    88: `37`,
    89: `38`,
    9: `2`,
    90: `39`,
    91: `40`,
    92: `40`,
    93: `41`,
    94: `42`,
    95: `42`,
    96: `42`,
    97: `43`,
    98: `44`,
    99: `45`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T5","name":"v1542","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_deposit0_86","type":"bool"},{"internalType":"bool","name":"_wd0_86","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v787","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v904","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_deposit0_86","type":"bool"},{"internalType":"bool","name":"_wd0_86","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1545","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dead","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"wd","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200179638819003918201601f19168301916001600160401b0383118484101762000406578084926080946040528339810103126200049357604051906200004b8262000498565b805182526020810151906001600160a01b038216820362000493576020830191825260606040820151916040850192835201519260608101938452600080554360035560006060604051620000a08162000498565b828152826020820152826040820152015260ff600454166200047a577f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb9760a060405133815283516020820152600180831b0386511660408201528451606082015286516080820152a15180159081156200046d575b50156200045457346200043b576200012c620004d0565b91516001600160a01b03168252516020820190815282516040830190815260006060840181815294516080850190815260a085019182523360c08601524360e086015292949092916200017e620004d0565b85516001600160a01b03908116825296516020820152905160408201529051606082015290516080820152905160a082015260c08083018051851691830191909152519092620001cf911662000520565b51600281101562000425576001036200041c5760c00151604090620001fd906001600160a01b031662000520565b01515b60e082015260036000554360015560e06040519160018060a01b038151166020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511682840152015161010090818301528152610120810181811060018060401b03821117620004065760405280516001600160401b0381116200040657600254600181811c91168015620003fb575b6020821014620003e557601f81116200037b575b50602091601f8211600114620003115791819260009262000305575b50508160011b916000199060031b1c1916176002555b6040516111aa9081620005ec8239f35b015190503880620002df565b601f19821692600260005260206000209160005b858110620003625750836001951062000348575b505050811b01600255620002f5565b015160001960f88460031b161c1916905538808062000339565b9192602060018192868501518155019401920162000325565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620003da575b601f0160051c01905b818110620003cd5750620002c3565b60008155600101620003be565b9091508190620003b5565b634e487b7160e01b600052602260045260246000fd5b90607f1690620002af565b634e487b7160e01b600052604160045260246000fd5b50600062000200565b634e487b7160e01b600052602160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000115565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b608081019081106001600160401b038211176200040657604052565b606081019081106001600160401b038211176200040657604052565b6040519061010082016001600160401b0381118382101762000406576040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b604080516200052f81620004b4565b600092838252602082018481528484840152829160018060a01b031692838652600560205260ff85872054166002811015620005d757600103620005c957505050825260056020528082208151926200058884620004b4565b81549060ff8216906002821015620005b55750845260081c60ff1615156020840152600101549082015290565b634e487b7160e01b81526021600452602490fd5b909250849350949390945252565b634e487b7160e01b87526021600452602487fdfe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f1146100bb5750806336cf7c87146100b257806336e56ea5146100a957806383230757146100a05780638edec68914610097578063ab53f2c61461008e578063d0e30db0146100855763f396fd8b0361000e57610080610312565b61000e565b506100806102ca565b50610080610258565b506100806101fe565b506100806101df565b50610080610187565b506100806100da565b346100d757806003193601126100d75760035460805260206080f35b80fd5b5034610145576000366003190112610145576100f46105f2565b60036000540361012c576020809160e061011d61010f61048b565b84808251830101910161067b565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b6001600160a01b031690565b6001600160a01b0381160361014557565b6002111561017157565b634e487b7160e01b600052602160045260246000fd5b50346101455760203660031901126101455760606101b86004356101aa81610156565b6101b2610536565b5061056f565b604080519180516101c881610167565b835260208101511515602084015201516040820152f35b5034610145576000366003190112610145576020600154604051908152f35b50600036600319011261014557602060606102176105f2565b61024c8161022361113e565b85810190600182515251151560408251015261023d61113e565b9060008252518682015261078f565b01511515604051908152f35b5034610145576000806003193601126100d757805461027561048b565b906040519283918252602090604082840152835191826040850152815b8381106102b357505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610292565b50600036600319011261014557602060406102e36105f2565b610308816102ef61113e565b858101906000825152511515868251015261023d61113e565b0151604051908152f35b506080366003190112610145576103276105f2565b60405190610334826103ee565b60043582526060366023190112610145576040519161035283610416565b6024359260028410156101455761039193815260443561037181610635565b602082015260643561038281610635565b6040820152602082015261078f565b60405160008152602090f35b90600182811c921680156103cd575b60208310146103b757565b634e487b7160e01b600052602260045260246000fd5b91607f16916103ac565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761040957604052565b6104116103d7565b604052565b606081019081106001600160401b0382111761040957604052565b61010081019081106001600160401b0382111761040957604052565b60a081019081106001600160401b0382111761040957604052565b601f909101601f19168101906001600160401b0382119082101761040957604052565b604051906000826002549161049f8361039d565b80835260019380851690811561051557506001146104c7575b506104c592500383610468565b565b6002600090815260008051602061117e83398151915294602093509091905b8183106104fd5750506104c59350820101386104b8565b855488840185015294850194879450918301916104e6565b90506104c594506020925060ff191682840152151560051b820101386104b8565b6040519061054382610416565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b90610578610536565b9160018060a01b03166000908082526005602052600160ff60408420541661059f81610167565b036105e757604092935081526005602052206001604051916105c083610416565b60ff81548181166105d081610167565b855260081c16151560208401520154604082015290565b508083526020830152565b60405190608082016001600160401b03811183821017610628575b60405260006060838281528260208201528260408201520152565b6106306103d7565b61060d565b8015150361014557565b60405190602082016001600160401b03811183821017610663575b60405260008252565b61066b6103d7565b61065a565b51906104c582610156565b90816101009103126101455760e06040519161069683610431565b80516106a181610156565b83526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a08401526106e160c08201610670565b60c0840152015160e082015290565b9092916040602060809260a085019660018060a01b031685528051828601520151805161071c81610167565b8285015260208101511515606085015201511515910152565b5161073f81610167565b90565b6040519061074f82610431565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b6001600160a01b039091169052565b9061079861063f565b906107a7600360005414610b5b565b6107af61048b565b906107c460209283808251830101910161067b565b916107e06107db6107d760045460ff1690565b1590565b610b7b565b806040957f17ec5e38ba31c24e430a6a804a7954ae08580921024aa52b2d69ed2100c2e7d08751806108138433836106f0565b0390a161082b81518015908115610add575b50610b9b565b016108368151610735565b61083f81610167565b610973575082916104c59561094592606060a0960192610860845115610c3b565b61088361087461086f3361056f565b610735565b61087d81610167565b15610c5b565b61088d3415610c7b565b6108ab6108a661089d885161014a565b30903390610e6a565b610c9b565b82828701986108bb8a5143610b23565b81526108d66108c933610555565b805460ff19166001179055565b805160016108e333610555565b0155805182519081527f8becc0c7ee2f6848af8bcdf635ba496d7d2a2907e349bbfee150566ca25a6eb490602090a15191015261091e610742565b9661093261092c875161014a565b89610780565b5190870152808401519086015251610b00565b606084015260808101516080840152015160a08201526109683360c08301610780565b4360e0820152610fee565b60019194506109829051610735565b61098b81610167565b14610997575b50505050565b60c082610abf610ad496610a98610acb95610a646060806109689a01926109c16001855114610bbb565b6109e160016109d261086f3361056f565b6109db81610167565b14610bdb565b6109eb3415610bfb565b610a06610a016109fb8a5161014a565b33610e0f565b610c1b565b610a1933610a148a5161014a565b610cbb565b610a31610a2533610555565b60016000918281550155565b8551600181527ff205f2fe250a25b520cc4eb7a057e2fcce9fd870f99d106bf7615a7af902bcb790602090a10160019052565b610a6c610742565b98610a80610a7a875161014a565b8b610780565b80860151908a0152828501928351908a015251610b37565b6060880152610aad6080840151825190610b4e565b608088015260a0830151905190610b23565b60a0860152015161014a565b60c08301610780565b38808080610991565b90506001541438610825565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111610b16575b821061014557565b610b1e610ae9565b610b0e565b9190820191828111610b1657821061014557565b6000198101908111610b465790565b61073f610ae9565b908103908111610b465790565b15610b6257565b60405163100960cb60e01b8152600b6004820152602490fd5b15610b8257565b60405163100960cb60e01b8152600c6004820152602490fd5b15610ba257565b60405163100960cb60e01b8152600d6004820152602490fd5b15610bc257565b60405163100960cb60e01b815260126004820152602490fd5b15610be257565b60405163100960cb60e01b815260136004820152602490fd5b15610c0257565b60405163100960cb60e01b815260146004820152602490fd5b15610c2257565b60405163100960cb60e01b815260156004820152602490fd5b15610c4257565b60405163100960cb60e01b8152600e6004820152602490fd5b15610c6257565b60405163100960cb60e01b8152600f6004820152602490fd5b15610c8257565b60405163100960cb60e01b815260106004820152602490fd5b15610ca257565b60405163100960cb60e01b815260116004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260016044808401919091528252610d399360009384939092918491608081016001600160401b03811182821017610d40575b6040525193165af1610d29610d22610d4d565b8092610daf565b5060208082518301019101610d9a565b1561014557565b610d486103d7565b610d0f565b3d15610d95573d906001600160401b038211610d88575b60405191610d7c601f8201601f191660200184610468565b82523d6000602084013e565b610d906103d7565b610d64565b606090565b90816020910312610145575161073f81610635565b15610db75790565b805115610dc657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15610de75790565b805115610df657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600061073f928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152610e538161044d565b5193165af1610d29610e63610d4d565b8092610ddf565b6040516323b872dd60e01b602082019081526001600160a01b03938416602483015293831660448201526001606480830191909152815261073f93600093849392849190610e538161044d565b601f8111610ec3575050565b6000906002825260208220906020601f850160051c83019410610f01575b601f0160051c01915b828110610ef657505050565b818155600101610eea565b9092508290610ee1565b80519091906001600160401b038111610fe1575b610f3381610f2e60025461039d565b610eb7565b602080601f8311600114610f6f5750819293600092610f64575b50508160011b916000199060031b1c191617600255565b015190503880610f4d565b6002600052601f1983169490919060008051602061117e833981519152926000905b878210610fc9575050836001959610610fb0575b505050811b01600255565b015160001960f88460031b161c19169055388080610fa5565b80600185968294968601518155019501930190610f91565b610fe96103d7565b610f1f565b6111246111326104c59260c0611002610742565b91611016611010825161014a565b84610780565b6020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a08401520161105f611056825161014a565b60c08401610780565b61107c61086f611077611072845161014a565b61014a565b61056f565b61108581610167565b60009060010361113757506110a26110776110726040935161014a565b01515b60e08201526110b46003600055565b6110bd43600155565b6040519283916020830191909160e08061010083019460018060a01b038082511685526020820151602086015260408201516040860152606082015160608601526080820151608086015260a082015160a086015260c08201511660c08501520151910152565b03601f198101835282610468565b610f0b565b90506110a5565b60408051919082016001600160401b03811183821017611170575b6040528160008152602061116b610536565b910152565b6111786103d7565b61115956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6038,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:32:53:after expr stmt semicolon',
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
