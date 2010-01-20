// Do not edit this file - Generated by MiniPerl6 2.0
// class MiniPerl6::Grammar
if (typeof MiniPerl6$Grammar != 'object') {
  MiniPerl6$Grammar = function() {};
  MiniPerl6$Grammar = new MiniPerl6$Grammar;
  MiniPerl6$Grammar.f_isa = function (s) { return s == 'MiniPerl6::Grammar' };
  MiniPerl6$Grammar.f_perl = function () { return '::MiniPerl6::Grammar(' + Main._dump(this) + ')' };
}
(function () {
  // method control
  MiniPerl6$Grammar.f_control = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ctrl_return(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["ctrl_return"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["ctrl_return"]))) })()) || f_bool(1) )) )) })()) || f_bool(( f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ctrl_leave(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["ctrl_leave"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["ctrl_leave"]))) })()) || f_bool(1) )) )) })()) || f_bool(( f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_if(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["if"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["if"]))) })()) || f_bool(1) )) )) })()) || f_bool(( f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_when(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["when"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["when"]))) })()) || f_bool(1) )) )) })()) || f_bool(( f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_for(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["for"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["for"]))) })()) || f_bool(1) )) )) })()) || f_bool(( f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_while(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["while"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["while"]))) })()) || f_bool(1) )) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_apply(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["apply"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["apply"]))) })()) || f_bool(1) )) )) })()) )) )) )) )) )) )) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_control;  // v8 bug workaround
  // method if
  MiniPerl6$Grammar.f_if = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return((function () { return(( f_bool(( f_bool(("i" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("f" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("{" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_stmts(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_stmts"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("}" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool((function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("l" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("s" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("{" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_stmts2(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_stmts2"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("}" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_cond: f_scalar(v_MATCH["exp"]),v_body: f_scalar(v_MATCH["exp_stmts"]),v_otherwise: f_scalar(v_MATCH["exp_stmts2"]),}; tmp.__proto__ = If; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) )) )) )) )) )) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_cond: f_scalar(v_MATCH["exp"]),v_body: f_scalar(v_MATCH["exp_stmts"]),v_otherwise: [],}; tmp.__proto__ = If; return tmp }())) })()) || f_bool(1) )) })()) )) })()) )) )) )) )) )) )) )) )) )) )) })()) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_if;  // v8 bug workaround
  // method when
  MiniPerl6$Grammar.f_when = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return((function () { return(( f_bool(( f_bool(("w" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("h" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("n" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_seq(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_seq"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("{" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_stmts(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_stmts"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("}" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_parameters: f_scalar(v_MATCH["exp_seq"]),v_body: f_scalar(v_MATCH["exp_stmts"]),}; tmp.__proto__ = When; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) )) )) )) )) )) )) )) })()) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_when;  // v8 bug workaround
  // method for
  MiniPerl6$Grammar.f_for = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return((function () { return(( f_bool(( f_bool(("f" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("o" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("r" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("->" == (v_str || "").substr(v_MATCH.f_to(), 2))) ? (1 + (v_MATCH.v_to = (2 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_var_ident(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["var_ident"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("{" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_stmts(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_stmts"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("}" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_cond: f_scalar(v_MATCH["exp"]),v_topic: f_scalar(v_MATCH["var_ident"]),v_body: f_scalar(v_MATCH["exp_stmts"]),}; tmp.__proto__ = For; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) )) )) )) )) )) )) )) )) )) )) })()) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_for;  // v8 bug workaround
  // method while
  MiniPerl6$Grammar.f_while = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return((function () { return(( f_bool(( f_bool(("w" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("h" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("i" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("l" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("{" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_stmts(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_stmts"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("}" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_cond: f_scalar(v_MATCH["exp"]),v_body: f_scalar(v_MATCH["exp_stmts"]),}; tmp.__proto__ = While; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) )) )) )) )) )) )) )) )) })()) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_while;  // v8 bug workaround
  // method ctrl_leave
  MiniPerl6$Grammar.f_ctrl_leave = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return((function () { return(( f_bool(( f_bool(("l" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("a" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("v" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {}; tmp.__proto__ = Leave; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) })()) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_ctrl_leave;  // v8 bug workaround
  // method ctrl_return
  MiniPerl6$Grammar.f_ctrl_return = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool(( f_bool(("r" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("t" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("u" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("r" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("n" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return((function () { var v_tmp;(v_tmp = v_MATCH);(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_tmp.f_to(),v_to: v_tmp.f_to(),v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return((function () { return(( f_bool(("(" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) })()) })());(v_tmp.v_bool = ( f_bool(v_MATCH) ? true : false));(v_MATCH = v_tmp);return(( f_bool(v_MATCH) ? true : false)) })()) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) })()) )) })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_result: f_scalar(v_MATCH["exp"]),}; tmp.__proto__ = Return; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) )) )) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool(( f_bool(("r" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("e" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("t" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("u" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("r" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool(( f_bool(("n" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_result: function () { var tmp = {}; tmp.__proto__ = Val$Undef; return tmp }(),}; tmp.__proto__ = Return; return tmp }())) })()) || f_bool(1) )) )) )) )) )) )) )) })()) )) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_ctrl_return;  // v8 bug workaround
})();

