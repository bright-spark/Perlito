// Do not edit this file - Generated by MiniPerl6 2.0
// class MiniPerl6::Grammar
if (typeof MiniPerl6$Grammar != 'object') {
  MiniPerl6$Grammar = function() {};
  MiniPerl6$Grammar = new MiniPerl6$Grammar;
  MiniPerl6$Grammar.f_isa = function (s) { return s == 'MiniPerl6::Grammar' };
  MiniPerl6$Grammar.f_perl = function () { return '::MiniPerl6::Grammar(' + Main._dump(this) + ')' };
}
(function () {
  // method pair_key
  MiniPerl6$Grammar.f_pair_key = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ident(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["ident"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_tmp;(v_tmp = v_MATCH);(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_tmp.f_to(),v_to: v_tmp.f_to(),v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool(("=>" == (v_str || "").substr(v_MATCH.f_to(), 2))) ? (1 + (v_MATCH.v_to = (2 + v_MATCH.f_to()))) : 0)) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return((function () { var v_m2;(v_m2 = v_grammar.f_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) })()) )) })());(v_tmp.v_bool = ( f_bool(v_MATCH) ? true : false));(v_MATCH = v_tmp);return(( f_bool(v_MATCH) ? true : false)) })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = function () { var tmp = {v_buf: (v_MATCH["ident"]).f_string(),}; tmp.__proto__ = Val$Buf; return tmp }())) })()) || f_bool(1) )) )) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = f_scalar(v_MATCH["exp"]))) })()) || f_bool(1) )) )) })()) )) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_pair_key;  // v8 bug workaround
  // method pair
  MiniPerl6$Grammar.f_pair = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_pair_key(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["pair_key"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("=>" == (v_str || "").substr(v_MATCH.f_to(), 2))) ? (1 + (v_MATCH.v_to = (2 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = [f_scalar(v_MATCH["pair_key"]), f_scalar(v_MATCH["exp"])])) })()) || f_bool(1) )) )) )) )) )) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool(( f_bool((":" == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_var_sigil(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["var_sigil"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_ident(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["ident"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = [function () { var tmp = {v_buf: (v_MATCH["ident"]).f_string(),}; tmp.__proto__ = Val$Buf; return tmp }(), function () { var tmp = {v_sigil: (f_scalar(v_MATCH["var_sigil"])).f_string(),v_twigil: "",v_name: f_scalar(v_MATCH["ident"]),}; tmp.__proto__ = Var; return tmp }()])) })()) || f_bool(1) )) )) )) )) })()) )) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_pair;  // v8 bug workaround
  // method exp_mapping
  MiniPerl6$Grammar.f_exp_mapping = function (v_str, v_pos) {
    var v_grammar = this;
    try { var v_MATCH = null;
(v_MATCH = function () { var tmp = {v_str: v_str,v_from: v_pos,v_to: v_pos,v_bool: 1,}; tmp.__proto__ = MiniPerl6$Match; return tmp }());(v_MATCH.v_bool = (function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_pair(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["pair"] = v_m2);return(1) } else { return(0) } })()) && f_bool((function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool(( f_bool(("," == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_exp_mapping(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());(v_MATCH["exp_mapping"] = v_m2);return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = (function () { var a = []; a.push(f_scalar(v_MATCH["pair"])); (function(a_) { for (var i_ = 0; i_ < a_.length ; i_++) { a.push(a_[i_]) }})((f_scalar(v_MATCH["exp_mapping"])));  return a })())) })()) || f_bool(1) )) )) )) )) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) && f_bool(( f_bool((function () { var v_pos1;(v_pos1 = v_MATCH.f_to());return(( f_bool((function () { return(( f_bool(( f_bool(("," == (v_str || "").substr(v_MATCH.f_to(), 1))) ? (1 + (v_MATCH.v_to = (1 + v_MATCH.f_to()))) : 0)) && f_bool((function () { var v_m2;(v_m2 = v_grammar.f_opt_ws(v_str, v_MATCH.f_to()));if ( f_bool(v_m2) ) { (v_MATCH.v_to = v_m2.f_to());return(1) } else { return(0) } })()) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(1) })()) )) })()) && f_bool(( f_bool((function () { return((v_MATCH.v_capture = [f_scalar(v_MATCH["pair"])])) })()) || f_bool(1) )) )) )) })()) )) })()) )) })()) || f_bool((function () { (v_MATCH.v_to = v_pos1);return(( f_bool((function () { return((v_MATCH.v_capture = [])) })()) || f_bool(1) )) })()) )) })());return(v_MATCH) } catch(err) { if ( err instanceof Error ) { throw(err) } else { return(err) } } 
  }
  MiniPerl6$Grammar.f_exp_mapping;  // v8 bug workaround
})();

